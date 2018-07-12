import React from 'react';
import Gesture, { IGestureStatus } from 'rc-gesture';
import { Models } from './Models';
import { TabBarPropsType } from './PropsType';
import { setPxStyle, getTransformPropValue, getPxStyle } from './util';

export interface PropsType extends TabBarPropsType {
  /** default: rmc-tabs-tab-bar */
  prefixCls?: string;
}

export class StateType {
  transform?= '';
  isMoving?= false;
  showPrev?= false;
  showNext?= false;
}

export class DefaultTabBar extends React.PureComponent<PropsType, StateType> {
  static defaultProps = {
    prefixCls: 'rmc-tabs-tab-bar',
    animated: true,
    tabs: [],
    goToTab: () => { },
    activeTab: 0,
    page: 5,
    tabBarUnderlineStyle: {},
    tabBarBackgroundColor: '#fff',
    tabBarActiveTextColor: '',
    tabBarInactiveTextColor: '',
    tabBarTextStyle: {},
  } as PropsType;

  layout: HTMLDivElement;

  onPan = (() => {
    let lastOffset: number | string = 0;
    let finalOffset = 0;

    const getLastOffset = (isVertical = this.isTabBarVertical()) => {
      let offset = +`${lastOffset}`.replace('%', '');
      if (`${lastOffset}`.indexOf('%') >= 0) {
        offset /= 100;
        offset *= isVertical ? this.layout.clientHeight : this.layout.clientWidth;
      }
      return offset;
    };

    return {
      onPanStart: () => {
        this.setState({ isMoving: true });
      },

      onPanMove: (status: IGestureStatus) => {
        if (!status.moveStatus || !this.layout) return;
        const isVertical = this.isTabBarVertical();
        let offset = getLastOffset() + (isVertical ? status.moveStatus.y : status.moveStatus.x);
        const canScrollOffset = isVertical ?
          -this.layout.scrollHeight + this.layout.clientHeight :
          -this.layout.scrollWidth + this.layout.clientWidth;
        offset = Math.min(offset, 0);
        offset = Math.max(offset, canScrollOffset);
        setPxStyle(this.layout, offset, 'px', isVertical);
        finalOffset = offset;

        this.setState({
          showPrev: -offset > 0,
          showNext: offset > canScrollOffset,
        });
      },

      onPanEnd: () => {
        const isVertical = this.isTabBarVertical();
        lastOffset = finalOffset;
        this.setState({
          isMoving: false,
          transform: getPxStyle(finalOffset, 'px', isVertical),
        });
      },

      setCurrentOffset: (offset: number | string) => lastOffset = offset,
    };
  })();

  constructor(props: PropsType) {
    super(props);
    this.state = {
      ...new StateType,
      ...this.getTransformByIndex(props),
    };
  }

  componentWillReceiveProps(nextProps: PropsType) {
    if (
      this.props.activeTab !== nextProps.activeTab ||
      this.props.tabs !== nextProps.tabs ||
      this.props.tabs.length !== nextProps.tabs.length
    ) {
      this.setState({
        ... this.getTransformByIndex(nextProps),
      });
    }
  }

  getTransformByIndex = (props: PropsType) => {
    const { activeTab, tabs, page = 0 } = props;
    const isVertical = this.isTabBarVertical();

    const size = this.getTabSize(page, tabs.length);
    const center = page / 2;
    let pos = Math.min(activeTab, tabs.length - center - .5);
    const skipSize = Math.min(-(pos - center + .5) * size, 0);
    this.onPan.setCurrentOffset(`${skipSize}%`);
    return {
      transform: getPxStyle(skipSize, '%', isVertical),
      showPrev: activeTab > center - .5 && tabs.length > page,
      showNext: activeTab < tabs.length - center - .5 && tabs.length > page,
    };
  }

  onPress = (index: number) => {
    const { goToTab, onTabClick, tabs } = this.props;
    onTabClick && onTabClick(tabs[index], index);
    goToTab && goToTab(index);
  }

  isTabBarVertical = (position = this.props.tabBarPosition) => position === 'left' || position === 'right';

  renderTab = (t: Models.TabData, i: number, size: number, isTabBarVertical: boolean) => {
    const {
      prefixCls, renderTab, activeTab,
      tabBarTextStyle,
      tabBarActiveTextColor,
      tabBarInactiveTextColor,
      instanceId,
    } = this.props;

    const textStyle = { ...tabBarTextStyle } as React.CSSProperties;
    let cls = `${prefixCls}-tab`;
    let ariaSelected = false;
    if (activeTab === i) {
      cls += ` ${cls}-active`;
      ariaSelected = true;
      if (tabBarActiveTextColor) {
        textStyle.color = tabBarActiveTextColor;
      }
    } else if (tabBarInactiveTextColor) {
      textStyle.color = tabBarInactiveTextColor;
    }

    return <div key={`t_${i}`}
      style={{
        ...textStyle,
        ...isTabBarVertical ? { height: `${size}%` } : { width: `${size}%` },
      }}
      id={`m-tabs-${instanceId}-${i}`}
      role="tab"
      aria-selected={ariaSelected}
      className={cls}
      onClick={() => this.onPress(i)}
    >
      {renderTab ? renderTab(t) : t.title}
    </div>;
  }

  setContentLayout = (div: HTMLDivElement) => {
    this.layout = div;
  }

  getTabSize = (page: number, tabLength: number) => 100 / Math.min(page, tabLength);

  render() {
    const {
      prefixCls, animated, tabs = [], page = 0, activeTab = 0,
      tabBarBackgroundColor, tabBarUnderlineStyle, tabBarPosition,
      renderUnderline,
    } = this.props;
    const { isMoving, transform, showNext, showPrev } = this.state;
    const isTabBarVertical = this.isTabBarVertical();

    const needScroll = tabs.length > page;
    const size = this.getTabSize(page, tabs.length);

    const Tabs = tabs.map((t, i) => {
      return this.renderTab(t, i, size, isTabBarVertical);
    });

    let cls = prefixCls;
    if (animated && !isMoving) {
      cls += ` ${prefixCls}-animated`;
    }

    let style = {
      backgroundColor: tabBarBackgroundColor || '',
    } as React.CSSProperties;

    let transformStyle = needScroll ? {
      ...getTransformPropValue(transform),
    } : {};

    const { setCurrentOffset, ...onPan } = this.onPan;
    const underlineProps = {
      style: {
        ...isTabBarVertical ? { height: `${size}%` } : { width: `${size}%` },
        ...isTabBarVertical ? { top: `${size * activeTab}%` } : { left: `${size * activeTab}%` },
        ...tabBarUnderlineStyle,
      },
      className: `${prefixCls}-underline`,
    };

    return <div className={`${cls} ${prefixCls}-${tabBarPosition}`} style={style}>
      {showPrev && <div className={`${prefixCls}-prevpage`}></div>}
      <Gesture {...onPan }
        direction={isTabBarVertical ? 'vertical' : 'horizontal'}
      >
        <div role="tablist" className={`${prefixCls}-content`} style={transformStyle} ref={this.setContentLayout}>
          {Tabs}
          {
            renderUnderline ? renderUnderline(underlineProps) :
              <div {...underlineProps}></div>
          }
        </div>
      </Gesture>
      {showNext && <div className={`${prefixCls}-nextpage`}></div>}
    </div>;
  }
}
