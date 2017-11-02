import React from 'react';
import Gesture, { IGestureStatus } from 'rc-gesture';
import { PropsType as BasePropsType, TabBarPropsType } from './PropsType';
import { TabPane } from './TabPane';
import { DefaultTabBar } from './DefaultTabBar';
import { getTransformPropValue, setTransform, setPxStyle } from './util';
import { Tabs as Component, StateType as BaseStateType } from './Tabs.base';

export interface PropsType extends BasePropsType {
  /** prefix class | default: rmc-tabs */
  prefixCls?: string;
}
export class StateType extends BaseStateType {
  transform?= '';
  isMoving?= false;
}
export class Tabs extends Component<PropsType, StateType> {
  static DefaultTabBar = DefaultTabBar;

  static defaultProps = {
    ...Component.defaultProps,
    prefixCls: 'rmc-tabs',
    useOnPan: true,
  } as PropsType;

  layout: HTMLDivElement;

  onPan = (() => {
    let lastOffset: number | string = 0;
    let finalOffset = 0;

    const getLastOffset = (isVertical = this.isTabVertical()) => {
      let offset = +`${lastOffset}`.replace('%', '');
      if (`${lastOffset}`.indexOf('%') >= 0) {
        offset /= 100;
        offset *= isVertical ? this.layout.clientHeight : this.layout.clientWidth;
      }
      return offset;
    };

    return {
      onPanStart: () => {
        if (!this.props.swipeable) return;
        this.setState({
          isMoving: true,
        });
      },

      onPanMove: (status: IGestureStatus) => {
        const { swipeable, animated } = this.props;
        if (!status.moveStatus || !this.layout || !swipeable || !animated) return;
        const isVertical = this.isTabVertical();
        let offset = getLastOffset() + (isVertical ? status.moveStatus.y : status.moveStatus.x);
        const canScrollOffset = isVertical ?
          -this.layout.scrollHeight + this.layout.clientHeight :
          -this.layout.scrollWidth + this.layout.clientWidth;
        offset = Math.min(offset, 0);
        offset = Math.max(offset, canScrollOffset);
        setPxStyle(this.layout, offset, 'px', isVertical);
        finalOffset = offset;
      },

      onPanEnd: () => {
        if (!this.props.swipeable) return;
        lastOffset = finalOffset;
        const offsetIndex = this.getOffsetIndex(finalOffset, this.layout.clientWidth);
        this.setState({
          isMoving: false,
        });
        if (offsetIndex === this.state.currentTab) {
          if (this.props.usePaged) {
            setTransform(this.layout.style, this.getTransformByIndex(offsetIndex, this.isTabVertical()));
          }
        } else {
          this.goToTab(offsetIndex);
        }
      },

      setCurrentOffset: (offset: number | string) => lastOffset = offset,
    };
  })();

  constructor(props: PropsType) {
    super(props);
    this.state = {
      ...this.state,
      ...new StateType,
      transform: this.getTransformByIndex(this.getTabIndex(props), this.isTabVertical(props.tabDirection)),
    };
  }

  goToTab(index: number, force = false, usePaged = this.props.usePaged) {
    const { tabDirection } = this.props;
    let newState = {};
    if (usePaged) {
      newState = {
        transform: this.getTransformByIndex(index, this.isTabVertical(tabDirection)),
      };
    }
    return super.goToTab(index, force, newState);
  }

  tabClickGoToTab(index: number) {
    this.goToTab(index, false, true);
  }

  getTransformByIndex(index: number, isVertical = false) {
    this.onPan.setCurrentOffset(`${-index * 100}%`);
    const translate = isVertical ? `0px, ${-index * 100}%` : `${-index * 100}%, 0px`;
    // fix: content overlay TabBar on iOS 10. ( 0px -> 1px )
    return `translate3d(${translate}, 1px)`;
  }

  onSwipe = (status: IGestureStatus) => {
    const { tabBarPosition, swipeable, usePaged } = this.props;
    if (!swipeable || !usePaged || this.isTabVertical()) return;
    // DIRECTION_NONE	1
    // DIRECTION_LEFT	2
    // DIRECTION_RIGHT	4
    // DIRECTION_UP	8
    // DIRECTION_DOWN	16
    // DIRECTION_HORIZONTAL	6
    // DIRECTION_VERTICAL	24
    // DIRECTION_ALL	30
    switch (tabBarPosition) {
      case 'top':
      case 'bottom':
        switch (status.direction) {
          case 2:
          case 8:
            this.goToTab(this.prevCurrentTab + 1);
            break;
          case 4:
          case 16:
            this.goToTab(this.prevCurrentTab - 1);
            break;
        }
        break;
    }
  }

  setContentLayout = (div: HTMLDivElement) => {
    this.layout = div;
  }

  renderContent(getSubElements = this.getSubElements()) {
    const { prefixCls, tabs, animated, destroyInactiveTab } = this.props;
    const { currentTab, isMoving, transform } = this.state;
    const isTabVertical = this.isTabVertical();

    let contentCls = `${prefixCls}-content-wrap`;
    if (animated && !isMoving) {
      contentCls += ` ${contentCls}-animated`;
    }
    const contentStyle = getTransformPropValue(transform);

    return <div className={contentCls} style={contentStyle} ref={this.setContentLayout}>
      {
        tabs.map((tab, index) => {
          let cls = `${prefixCls}-pane-wrap`;
          if (this.state.currentTab === index) {
            cls += ` ${cls}-active`;
          } else {
            cls += ` ${cls}-inactive`;
          }

          const key = tab.key || `tab_${index}`;

          // update tab cache
          if (this.shouldRenderTab(index)) {
            this.tabCache[index] = this.getSubElement(tab, index, getSubElements);
          } else if (destroyInactiveTab) {
            this.tabCache[index] = undefined;
          }

          return <TabPane key={key} className={cls}
            active={currentTab === index}
            fixX={isTabVertical} fixY={!isTabVertical}
          >
            {this.tabCache[index]}
          </TabPane>;
        })
      }
    </div>;
  }

  render() {
    const { prefixCls, tabBarPosition, tabDirection, useOnPan } = this.props;
    const isTabVertical = this.isTabVertical(tabDirection);

    const tabBarProps: TabBarPropsType = {
      ...this.getTabBarBaseProps(),
    };

    const onPan = !isTabVertical && useOnPan ? this.onPan : {};

    const content = [
      <div key="tabBar" className={`${prefixCls}-tab-bar-wrap`}>
        {this.renderTabBar(tabBarProps, DefaultTabBar)}
      </div>,
      <Gesture key="$content"
        direction={isTabVertical ? 'vertical' : 'horizontal'}
        onSwipe={this.onSwipe}
        {...onPan}
      >
        {this.renderContent()}
      </Gesture>,
    ];

    return <div className={`${prefixCls} ${prefixCls}-${tabDirection} ${prefixCls}-${tabBarPosition}`}>
      {
        tabBarPosition === 'top' || tabBarPosition === 'left' ? content : content.reverse()
      }
    </div>;
  }
}
