import React from 'react';
import Gesture, { IGestureStauts } from 'rc-gesture';
import { PropsType, TabBarPropsType } from './PropsType';
import { TabPane } from './TabPane';
import { DefaultTabBar } from './DefaultTabBar';
import { getTransformByIndex, getTransformPropValue } from './util';

export class StateType {
    currentTab: number;
    minRenderIndex: number;
    maxRenderIndex: number;
}

export class Tabs extends React.PureComponent<PropsType, StateType> {
    static defaultProps = {
        prefixCls: 'rmc-tabs',
        tabBarPosition: 'top',
        initalPage: 0,
        swipeable: true,
        animated: true,
        prerenderingSiblingsNumber: 0,
        tabs: [],
    } as PropsType;

    constructor(props: PropsType) {
        super(props);

        this.state = this.getPrerenderRange(props.prerenderingSiblingsNumber, {
            currentTab: this.getTabIndex(props),
            minRenderIndex: props.tabs.length - 1,
            maxRenderIndex: 0,
        });
    }

    getTabIndex(props: PropsType) {
        const { page, initalPage } = props;
        const param = (page !== undefined ? page : initalPage) || 0;

        let index = 0;
        if (typeof (param as any) === 'string') {
            index = this.props.tabs.findIndex(t => t.key === param);
        } else {
            index = param as number || 0;
        }
        return index < 0 ? 0 : index;
    }

    getPrerenderRange(preRenderNumber = 0, state?: StateType, currentTab = -1) {
        let { minRenderIndex, maxRenderIndex } = (state || this.state);
        state = state || {} as StateType;
        if (currentTab === -1) {
            currentTab = state.currentTab !== undefined ? state.currentTab : this.state.currentTab;
        }

        return {
            ...state,
            minRenderIndex: Math.min(minRenderIndex, currentTab - preRenderNumber),
            maxRenderIndex: Math.max(maxRenderIndex, currentTab + preRenderNumber),
        };
    }

    shouldRenderTab(idx: number) {
        const { minRenderIndex, maxRenderIndex } = this.state;

        return minRenderIndex <= idx && idx <= maxRenderIndex;
    }

    shouldUpdateTab(idx: number) {
        const { prerenderingSiblingsNumber: prerenderNumber = 0 } = this.props;
        const { currentTab = 0 } = this.state;

        return currentTab - prerenderNumber <= idx && idx <= currentTab + prerenderNumber;
    }

    componentWillReceiveProps(nextProps: PropsType) {
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

    onSwipe = (status: IGestureStauts) => {
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

    goToTab = (index: number, force = false) => {
        if (this.state.currentTab === index) {
            return;
        }
        const { tabs, onChangeTab, prerenderingSiblingsNumber } = this.props;
        !force && onChangeTab && onChangeTab(index, tabs[index]);
        if (!force && this.props.page !== undefined) {
            return;
        }
        if (index >= 0 && index < tabs.length) {
            this.setState({
                currentTab: index,
                ...this.getPrerenderRange(prerenderingSiblingsNumber, undefined, index),
            });
        }
    }

    render() {
        const { prefixCls, tabs, tabBarPosition, renderTabBar, animated, children } = this.props;
        const { currentTab } = this.state;
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
            subElements[`${defaultPrefix}${currentTab}`] = children;
        }

        let contentCls = `${prefixCls}-content-wrap`;
        if (animated) {
            contentCls += ` ${contentCls}-animated`;
        }

        const contentStyle = getTransformPropValue(getTransformByIndex(currentTab, tabBarPosition));

        const tabBarProps: TabBarPropsType = {
            goToTab: this.goToTab,
            tabs,
            activeTab: currentTab,
            animated: !!animated,
            tabBarPosition,
        };

        let tabBarComponent;
        if (renderTabBar) {
            tabBarComponent = renderTabBar(tabBarProps);
            // tabBarComponent = React.cloneElement(tabBarComponent, tabBarProps);
        } else {
            tabBarComponent = <DefaultTabBar {...tabBarProps} />;
        }

        const content = [
            <div key="tabBar" className={`${prefixCls}-tab-bar-wrap`}>
                {tabBarComponent}
            </div>,
            <Gesture key="content" onSwipe={this.onSwipe}>
                <div className={contentCls} style={contentStyle}>
                    {tabs.map((tab, index) => {
                        const key = tab.key || `${defaultPrefix}${index}`;
                        let component = subElements[key];
                        if (component instanceof Function) {
                            component = component(index, tab);
                        }
                        let cls = `${prefixCls}-pane-wrap`;
                        if (this.state.currentTab === index) {
                            cls += ` ${cls}-active`;
                        } else {
                            cls += ` ${cls}-inactive`;
                        }

                        return <TabPane key={key} className={cls}
                            shouldUpdate={this.shouldUpdateTab(index)}>
                            {this.shouldRenderTab(index) && component}
                        </TabPane>;
                    })}
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