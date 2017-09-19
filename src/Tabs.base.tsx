import React from 'react';
import { PropsType } from './PropsType';
import { Models } from './Models';

export class StateType {
  currentTab: number;
  minRenderIndex: number;
  maxRenderIndex: number;
}

export abstract class Tabs<
  P extends PropsType = PropsType,
  S extends StateType = StateType
  > extends React.PureComponent<P, S> {
  static defaultProps = {
    tabBarPosition: 'top',
    initialPage: 0,
    swipeable: true,
    animated: true,
    prerenderingSiblingsNumber: 1,
    tabs: [],
    destroyInactiveTab: false,
    usePaged: true,
    tabDirection: 'horizontal',
    distanceToChangeTab: .3,
  } as PropsType;

  prevCurrentTab: number;

  /** compatible for different between react and preact in `setState`. */
  private nextCurrentTab: number;
  // private tabCache: { [key: string]: React.ReactNode } = {};

  constructor(props: P) {
    super(props);

    this.state = this.getPrerenderRange(props.prerenderingSiblingsNumber, {
      currentTab: this.getTabIndex(props),
      minRenderIndex: props.tabs.length - 1,
      maxRenderIndex: 0,
    } as S);
    this.nextCurrentTab = this.state.currentTab;
  }

  getTabIndex(props: P) {
    const { page, initialPage, tabs } = props;
    const param = (page !== undefined ? page : initialPage) || 0;

    let index = 0;
    if (typeof (param as any) === 'string') {
      tabs.forEach((t, i) => {
        if (t.key === param) {
          index = i;
        }
      });
    } else {
      index = param as number || 0;
    }
    return index < 0 ? 0 : index;
  }

  getPrerenderRange = (preRenderNumber = 0, state?: S, currentTab = -1): S => {
    let { minRenderIndex, maxRenderIndex } = (state || this.state);
    state = state || {} as S;
    if (currentTab === -1) {
      currentTab = state.currentTab !== undefined ? state.currentTab : this.state.currentTab;
    }

    return {
      ...state as any,
      minRenderIndex: Math.min(minRenderIndex, currentTab - preRenderNumber),
      maxRenderIndex: Math.max(maxRenderIndex, currentTab + preRenderNumber),
    };
  }

  isTabVertical = (direction = (this.props as PropsType).tabDirection) => direction === 'vertical';

  shouldRenderTab = (idx: number) => {
    const { destroyInactiveTab, prerenderingSiblingsNumber = 0 } = this.props as PropsType;
    const { minRenderIndex, maxRenderIndex, currentTab = 0 } = this.state as any as StateType;

    if (destroyInactiveTab) {
      return currentTab - prerenderingSiblingsNumber <= idx && idx <= currentTab + prerenderingSiblingsNumber;
    }
    return minRenderIndex <= idx && idx <= maxRenderIndex;
  }

  shouldUpdateTab = (idx: number) => {
    const { currentTab = 0 } = this.state as S;
    const tabChanged = currentTab !== this.prevCurrentTab;
    return tabChanged && currentTab === idx;
  }

  componentWillReceiveProps(nextProps: P) {
    if (this.props.page !== nextProps.page && nextProps.page !== undefined) {
      this.goToTab(this.getTabIndex(nextProps), true);
    }
    if (this.props.prerenderingSiblingsNumber !== nextProps.prerenderingSiblingsNumber) {
      this.setState(this.getPrerenderRange(
        nextProps.prerenderingSiblingsNumber,
        {
          minRenderIndex: this.state.minRenderIndex,
          maxRenderIndex: this.state.maxRenderIndex,
        } as any,
        nextProps.page !== undefined ? this.getTabIndex(nextProps) : this.state.currentTab
      ));
    }
  }

  componentDidMount() {
    this.prevCurrentTab = this.state.currentTab;
  }

  componentDidUpdate() {
    this.prevCurrentTab = this.state.currentTab;
  }

  getOffsetIndex = (current: number, width: number, threshold = this.props.distanceToChangeTab || 0) => {
    const ratio = Math.abs(current / width);
    const direction = ratio > this.state.currentTab ? '<' : '>';
    const index = Math.floor(ratio);
    switch (direction) {
      case '<':
        return ratio - index > threshold ? index + 1 : index;
      case '>':
        return 1 - ratio + index > threshold ? index : index + 1;
      default:
        return Math.round(ratio);
    }
  }

  goToTab(index: number, force = false, newState: any = {}) {
    if (!force && this.nextCurrentTab === index) {
      return false;
    }
    this.nextCurrentTab = index;
    const { tabs, onChange, prerenderingSiblingsNumber } = this.props as P;
    if (index >= 0 && index < tabs.length) {
      if (!force) {
        onChange && onChange(tabs[index], index);
        if (this.props.page !== undefined) {
          return false;
        }
      }

      this.setState({
        currentTab: index,
        ...this.getPrerenderRange(prerenderingSiblingsNumber, undefined, index) as any,
        ...newState,
      });
    }
    return true;
  }

  tabClickGoToTab(index: number) {
    this.goToTab(index);
  }

  getTabBarBaseProps() {
    const { currentTab } = this.state;

    const {
      animated,
      onTabClick,
      tabBarActiveTextColor,
      tabBarBackgroundColor,
      tabBarInactiveTextColor,
      tabBarPosition,
      tabBarTextStyle,
      tabBarUnderlineStyle,
      tabs,
     } = this.props;
    return {
      activeTab: currentTab,
      animated: !!animated,
      goToTab: this.tabClickGoToTab.bind(this),
      onTabClick,
      tabBarActiveTextColor,
      tabBarBackgroundColor,
      tabBarInactiveTextColor,
      tabBarPosition,
      tabBarTextStyle,
      tabBarUnderlineStyle,
      tabs,
    };
  }

  renderTabBar(tabBarProps: any, DefaultTabBar: React.ComponentClass) {
    const { renderTabBar } = this.props as P;
    if (renderTabBar === false) {
      return null;
    } else if (renderTabBar) {
      // return React.cloneElement(this.props.renderTabBar(props), props);
      return renderTabBar(tabBarProps);
    } else {
      return <DefaultTabBar {...tabBarProps} />;
    }
  }

  getSubElements = () => {
    const { children } = this.props;
    let subElements: { [key: string]: React.ReactNode } = {};

    return (defaultPrefix: string = '$i$-', allPrefix: string = '$ALL$') => {
      if (Array.isArray(children)) {
        children.forEach((child: any, index) => {
          if (child.key) {
            subElements[child.key] = child;
          }
          subElements[`${defaultPrefix}${index}`] = child;
        });
      } else if (children) {
        subElements[allPrefix] = children;
      }
      return subElements;
    };
  }

  getSubElement(
    tab: Models.TabData,
    index: number,
    subElements: (defaultPrefix: string, allPrefix: string) => { [key: string]: any },
    defaultPrefix: string = '$i$-',
    allPrefix: string = '$ALL$'
  ) {
    const key = tab.key || `${defaultPrefix}${index}`;
    const elements = subElements(defaultPrefix, allPrefix);
    let component = elements[key] || elements[allPrefix];
    if (component instanceof Function) {
      component = component(tab, index);
    }
    return component || null;
  }
}
