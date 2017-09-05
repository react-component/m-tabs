import React from 'react';
import Gesture, { IGestureStatus } from 'rc-gesture';
import { PropsType, TabBarPropsType } from './PropsType';
import { TabPane } from './TabPane';
import { DefaultTabBar } from './DefaultTabBar';
import { getTransformByIndex, getTransformPropValue, setTransform, setPxStyle, getOffset } from './util';
import { Tabs as Component } from './Tabs.base';

export class StateType {
    currentTab: number;
    minRenderIndex: number;
    maxRenderIndex: number;
    isMoving?= false;
}

export class Tabs extends Component<PropsType, StateType> {
    static defaultProps = {
        ...Component.defaultProps,
        prefixCls: 'rmc-tabs',
        useOnPan: true,
    } as PropsType;

    layout: HTMLDivElement;
    tmpOffset = 0;

    onSwipe = (status: IGestureStatus) => {
        const { tabBarPosition, swipeable } = this.props;
        if (!swipeable) return;
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
                        this.goToTab(this.state.currentTab + 1);
                        break;
                    case 4:
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
        if (!status.moveStatus || !this.layout) return;
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
        const offsetIndex = Math.round(Math.abs(getOffset(this.layout) / this.layout.clientWidth));
        if (offsetIndex === this.state.currentTab) {
            const { tabBarPosition } = this.props;
            setTransform(this.layout.style, getTransformByIndex(offsetIndex, tabBarPosition));
        } else {
            this.goToTab(offsetIndex);
        }
    }

    setContentLayout = (div: HTMLDivElement) => {
        this.layout = div;
    }

    render() {
        const { prefixCls, tabs, tabBarPosition, animated, useOnPan, children } = this.props;
        const { currentTab, isMoving } = this.state;
        const defaultPrefix = '$i$-';

        let subElements: { [key: string]: any } = {};
        if (Array.isArray(children)) {
            children.forEach((child: any, index) => {
                if (child.key) {
                    subElements[child.key] = child;
                }
                subElements[`${defaultPrefix}${index}`] = child;
            });
        } else if (children) {
            subElements['$ALL$'] = children;
        }

        let contentCls = `${prefixCls}-content-wrap`;
        if (animated && !isMoving) {
            contentCls += ` ${contentCls}-animated`;
        }

        const contentStyle = getTransformPropValue(getTransformByIndex(currentTab, tabBarPosition));

        const {
            tabBarActiveTextColor,
            tabBarBackgroundColor,
            tabBarInactiveTextColor,
            tabBarTextStyle,
            tabBarUnderlineStyle,
        } = this.props;
        const tabBarProps: TabBarPropsType = {
            goToTab: this.goToTab,
            tabs,
            activeTab: currentTab,
            animated: !!animated,
            tabBarActiveTextColor,
            tabBarBackgroundColor,
            tabBarInactiveTextColor,
            tabBarTextStyle,
            tabBarUnderlineStyle,
        };

        const onPan = useOnPan ? {
            onPanStart: this.onPanStart,
            onPanMove: this.onPanMove,
            onPanEnd: this.onPanEnd,
        } : {};

        const content = [
            <div key="tabBar" className={`${prefixCls}-tab-bar-wrap`}>
                {this.renderTabBar(tabBarProps, DefaultTabBar)}
            </div>,
            <Gesture key="$content"
                onSwipe={this.onSwipe}
                {...onPan}
            >
                <div className={contentCls} style={contentStyle} ref={this.setContentLayout}>
                    {
                        tabs.map((tab, index) => {
                            const key = tab.key || `${defaultPrefix}${index}`;
                            let component = subElements[key] || subElements['$ALL$'];
                            if (component instanceof Function) {
                                component = component(tab, index);
                            }
                            let cls = `${prefixCls}-pane-wrap`;
                            if (this.state.currentTab === index) {
                                cls += ` ${cls}-active`;
                            } else {
                                cls += ` ${cls}-inactive`;
                            }

                            return <TabPane key={key} className={cls}
                                shouldUpdate={this.shouldUpdateTab(index)}
                                active={currentTab === index}
                            >
                                {this.shouldRenderTab(index) && component}
                            </TabPane>;
                        })
                    }
                </div>
            </Gesture>,
        ];

        return <div className={`${prefixCls} ${prefixCls}-${tabBarPosition}`}>
            {
                tabBarPosition === 'top' ? content : content.reverse()
            }
        </div>;
    }
}