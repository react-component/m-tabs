import React from 'react';
import {
  default as RN,
  Dimensions,
  View,
  Animated,
  ScrollView,
  InteractionManager,
  Platform,
} from 'react-native';
import { PropsType as BasePropsType } from './PropsType';
import { Tabs as Component, StateType as BaseStateType } from './Tabs.base';
import { DefaultTabBar } from './DefaultTabBar';
import { StaticContainer } from './StaticContainer';
import Styles from './Styles.native';

const TabPane = (Props: any) => {
  const { shouldUpdate, ...props } = Props;
  return <View {...props}>
    <StaticContainer shouldUpdate={shouldUpdate}>
      {props.children}
    </StaticContainer>
  </View>;
};

export interface PropsType extends BasePropsType {
  children?: any;
  style?: RN.ViewStyle;
  styles?: typeof Styles;
}
export interface StateType extends BaseStateType {
  scrollX: Animated.Value;
  scrollValue: Animated.Value;
  containerWidth: number;
}
export class Tabs extends Component<PropsType, StateType> {
  static DefaultTabBar = DefaultTabBar;

  static defaultProps = {
    ...Component.defaultProps,
    style: {},
  } as PropsType;

  scrollView: ScrollView;

  constructor(props: PropsType) {
    super(props);
    const width = Dimensions.get('window').width;

    const pageIndex = this.getTabIndex(props);
    this.state = {
      ...this.state,
      scrollX: new Animated.Value(pageIndex * width),
      scrollValue: new Animated.Value(pageIndex),
      containerWidth: width,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      InteractionManager.runAfterInteractions(() => {
        if (Platform.OS === 'android') {
          this.goToTab(this.getTabIndex(this.props));
        }
      });
    }, 0);

    this.state.scrollX.addListener(({ value, }) => {
      const scrollValue = value / this.state.containerWidth;
      this.state.scrollValue.setValue(scrollValue);
      // this.props.onScroll(scrollValue);
    });
  }

  renderContent = (
    subElements: { [key: string]: any } = this.getSubElements(),
    defaultPrefix: string = '$i$-', allPrefix: string = '$ALL$'
  ) => {
    const { tabs } = this.props;
    const { currentTab, containerWidth } = this.state;

    return <ScrollView key="$content"
      horizontal
      pagingEnabled
      automaticallyAdjustContentInsets={false}
      ref={(scrollView: any) => { this.scrollView = scrollView; }}
      onScroll={
        Animated.event([{
          nativeEvent: { contentOffset: { x: this.state.scrollX } }
        }])
      }
      onMomentumScrollEnd={this.onMomentumScrollEnd}
      scrollEventThrottle={16}
      scrollsToTop={false}
      showsHorizontalScrollIndicator={false}
      scrollEnabled={this.props.swipeable}
      directionalLockEnabled
      alwaysBounceVertical={false}
      keyboardDismissMode="on-drag"
    >
      {
        tabs.map((tab, index) => {
          const key = tab.key || `${defaultPrefix}${index}`;
          let component = subElements[key] || subElements[allPrefix];
          if (component instanceof Function) {
            component = component(tab, index);
          }

          return <TabPane key={key}
            shouldUpdate={this.shouldUpdateTab(index)}
            active={currentTab === index}
            style={{ width: containerWidth }}
          >
            {this.shouldRenderTab(index) && component}
          </TabPane>;
        })
      }
    </ScrollView>;
  }

  onMomentumScrollEnd = (e: RN.NativeSyntheticEvent<RN.NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const page = Math.round(offsetX / this.state.containerWidth);
    if (this.state.currentTab !== page) {
      this.goToTab(page);
    }
  }

  goToTab(index: number, force: boolean = false) {
    const result = super.goToTab(index, force);
    if (result) {
      this.scrollTo(index);
    }
    return result;
  }

  handleLayout = (e: RN.LayoutChangeEvent) => {
    const { width } = e.nativeEvent.layout;

    requestAnimationFrame(() => {
      this.scrollTo(this.state.currentTab, false);
    });
    if (Math.round(width) !== Math.round(this.state.containerWidth)) {
      this.setState({ containerWidth: width });
    }
  }

  scrollTo = (index: number, animated = true) => {
    const { containerWidth } = this.state;
    if (containerWidth) {
      const offset = index * containerWidth;
      if (this.scrollView && this.scrollView.scrollTo) {
        this.scrollView.scrollTo({ x: offset, animated });
      }
    }
  }

  render() {
    const { tabBarPosition, styles = Styles } = this.props;
    const { scrollX, scrollValue, containerWidth } = this.state;
    // let overlayTabs = (this.props.tabBarPosition === 'overlayTop' || this.props.tabBarPosition === 'overlayBottom');
    let overlayTabs = false;

    let tabBarProps = {
      ...this.getTabBarBaseProps(),

      scrollX: scrollX,
      scrollValue: scrollValue,
      containerWidth: containerWidth,
    };

    if (overlayTabs) {
      // tabBarProps.style = {
      //     position: 'absolute',
      //     left: 0,
      //     right: 0,
      //     [this.props.tabBarPosition === 'overlayTop' ? 'top' : 'bottom']: 0,
      // };
    }

    const content = [
      <View key="$tabbar" style={tabBarPosition === 'top' ? styles.Tabs.topTabBarSplitLine : styles.Tabs.bottomTabBarSplitLine}>
        {this.renderTabBar(tabBarProps, DefaultTabBar)}
      </View>,
      this.renderContent()
    ];

    return <View style={{
      ...styles.Tabs.container, ...this.props.style,
    }} onLayout={this.handleLayout}>
      {tabBarPosition === 'top' ? content : content.reverse()}
    </View>;
  }
}