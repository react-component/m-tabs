import React from 'react';
import { PropsType } from './PropsType';

export class StateType {
  currentTab: number;
  minRenderIndex: number;
  maxRenderIndex: number;
  isMoving?= false;
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
  } as PropsType;

  tmpOffset = 0;

  constructor(props: P) {
    super(props);

    this.state = this.getPrerenderRange(props.prerenderingSiblingsNumber, {
      currentTab: this.getTabIndex(props),
      minRenderIndex: props.tabs.length - 1,
      maxRenderIndex: 0,
    } as S);
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

  shouldRenderTab = (idx: number) => {
    const { minRenderIndex, maxRenderIndex } = this.state;

    return minRenderIndex <= idx && idx <= maxRenderIndex;
  }

  shouldUpdateTab = (idx: number) => {
    const { prerenderingSiblingsNumber: prerenderNumber = 0 } = this.props as P;
    const { currentTab = 0 } = this.state as S;

    return currentTab - prerenderNumber <= idx && idx <= currentTab + prerenderNumber;
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

  goToTab(index: number, force = false) {
    if (!force && this.state.currentTab === index) {
      return false;
    }
    const { tabs, onChange, prerenderingSiblingsNumber } = this.props as P;
    if (!force) {
      onChange && onChange(tabs[index], index);
      if (this.props.page !== undefined) {
        return false;
      }
    }
    if (index >= 0 && index < tabs.length) {
      // compatible with preact, because the setState is different between.
      setImmediate(() => {
        this.setState({
          currentTab: index,
          ...this.getPrerenderRange(prerenderingSiblingsNumber, undefined, index) as any,
        });
      });
    }
    return true;
  }

  getTabBarBaseProps() {
    const { currentTab } = this.state;

    const {
      tabs, animated,
      tabBarActiveTextColor,
      tabBarBackgroundColor,
      tabBarInactiveTextColor,
      tabBarTextStyle,
      tabBarUnderlineStyle,
      onTabClick,
    } = this.props;
    return {
      goToTab: this.goToTab.bind(this),
      onTabClick,
      tabs,
      activeTab: currentTab,
      animated: !!animated,
      tabBarActiveTextColor,
      tabBarBackgroundColor,
      tabBarInactiveTextColor,
      tabBarTextStyle,
      tabBarUnderlineStyle,
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

  getSubElements(defaultPrefix: string = '$i$-', allPrefix: string = '$ALL$') {
    const { children } = this.props;
    let subElements: { [key: string]: any } = {};
    if (Array.isArray(children) && children.length > 1) {
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
  }
}
