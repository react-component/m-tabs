import React from 'react';
import Gesture, { IGestureStatus } from 'rc-gesture';
import { PropsType as BasePropsType, TabBarPropsType } from './PropsType';
import { TabPane } from './TabPane';
import { DefaultTabBar } from './DefaultTabBar';
import { getTransformByIndex, getTransformPropValue, setTransform, setPxStyle, getOffset } from './util';
import { Tabs as Component } from './Tabs.base';

export interface PropsType extends BasePropsType {
  /** prefix class | default: rmc-tabs */
  prefixCls?: string;
}
export class StateType {
  currentTab: number;
  minRenderIndex: number;
  maxRenderIndex: number;
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
  tmpOffset = 0;

  onSwipe = (status: IGestureStatus) => {
    const { tabBarPosition, swipeable, usePaged } = this.props;
    if (!swipeable || !usePaged || this.isTabVertical) return;
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
            this.goToTab(this.state.currentTab + 1);
            break;
          case 4:
          case 16:
            this.goToTab(this.state.currentTab - 1);
            break;
        }
        break;
    }
  }

  onPanStart = () => {
    this.setState({
      isMoving: true,
    });
    this.tmpOffset = getOffset(this.layout);
  }

  onPanMove = (status: IGestureStatus) => {
    const { swipeable } = this.props;
    if (!status.moveStatus || !this.layout || !swipeable) return;
    const angle = Math.abs(status.moveStatus.angle);
    if (45 < angle && angle < 135) return;

    let offset = this.tmpOffset + status.moveStatus.x;
    const canScrollWidth = -this.layout.scrollWidth + this.layout.clientWidth;
    offset = Math.min(offset, 0);
    offset = Math.max(offset, canScrollWidth);
    setPxStyle(this.layout, offset);
  }

  onPanEnd = () => {
    this.setState({
      isMoving: false,
    });
    if (!this.props.usePaged) { return; }
    const offsetIndex = this.getOffsetIndex(getOffset(this.layout), this.layout.clientWidth);
    if (offsetIndex === this.state.currentTab) {
      setTransform(this.layout.style, getTransformByIndex(offsetIndex, this.isTabVertical()));
    } else {
      this.goToTab(offsetIndex);
    }
  }

  setContentLayout = (div: HTMLDivElement) => {
    this.layout = div;
  }

  renderContent(getSubElements = this.getSubElements()) {
    const { prefixCls, tabs, animated } = this.props;
    const { currentTab, isMoving } = this.state;
    const isTabVertical = this.isTabVertical();

    let contentCls = `${prefixCls}-content-wrap`;
    if (animated && !isMoving) {
      contentCls += ` ${contentCls}-animated`;
    }
    const contentStyle = getTransformPropValue(getTransformByIndex(currentTab, isTabVertical));

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
          return <TabPane key={key} className={cls}
            shouldUpdate={this.shouldUpdateTab(index)}
            active={currentTab === index}
            fixX={isTabVertical} fixY={!isTabVertical}
          >
            {this.shouldRenderTab(index) && this.getSubElement(tab, index, getSubElements)}
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

    const onPan = !isTabVertical && useOnPan ? {
      onPanStart: this.onPanStart,
      onPanMove: this.onPanMove,
      onPanEnd: this.onPanEnd,
    } : {};

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

    return <div className={`${prefixCls} ${prefixCls}-${tabDirection} ${prefixCls}-tabbar-${tabBarPosition}`}>
      {
        tabBarPosition === 'top' || tabBarPosition === 'left' ? content : content.reverse()
      }
    </div>;
  }
}
