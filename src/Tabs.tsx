import React from 'react';
import Gesture, { IGestureStauts } from 'rc-gesture';
import { Models } from './Models';
import { DefaultTabBar } from './DefaultTabBar';
import { getTransformByIndex, getTransformPropValue } from './util';

export interface PropsType {
    /** 样式前缀(web only), default: rmc-tabs */
    prefixCls?: string;
    /** 样式 */
    style?: React.CSSProperties;
    /** tab数据 */
    tabs: Models.TabData[];
    /** TabBar位置, default: top */
    tabBarPosition?: 'top' | 'bottom'; // TODO left, right
    /** 替换TabBar */
    renderTabBar?: (props: any) => any;
    /** 初始化Tab, index or key */
    initalTab?: number | string;
    /** 当前Tab, index or key */
    tab?: number | string;
    /** 是否可以滑动切换, default: true */
    swipeable?: boolean;
    /** TODO 预加载两侧Tab数量, default: 0 */
    prerenderingSiblingsNumber?: number;
    /** 是否开启切换动画, default: true */
    animated?: boolean;
    /** tab变化时触发 */
    onChangeTab?: (index: number) => void;
}
export class StateType {
    currentTab: number;
}

export class Tabs extends React.PureComponent<PropsType, StateType> {
    static defaultProps = {
        prefixCls: 'rmc-tabs',
        tabBarPosition: 'top',
        initalTab: 0,
        swipeable: true,
        animated: true,
        prerenderingSiblingsNumber: 0,
    } as PropsType;

    constructor(props: PropsType) {
        super(props);

        const tab = 'tab' in props ?
            this.getTabIndex(props.tab) : this.getTabIndex(props.initalTab);

        this.state = {
            currentTab: tab,
        };
    }

    getTabIndex(param: number | string | undefined) {
        let index = 0;
        if (typeof (param as any) === 'string') {
            index = this.props.tabs.findIndex(t => t.key === param);
        } else {
            index = param as number || 0;
        }
        return index < 0 ? 0 : index;
    }

    componentWillReceiveProps(nextProps: PropsType) {
        if (this.props.tab !== nextProps.tab) {
            this.setState({ currentTab: this.getTabIndex(nextProps.tab) });
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
                        this.goToPage(this.state.currentTab + 1);
                        break;
                    case 4:
                        this.goToPage(this.state.currentTab - 1);
                        break;
                }
                break;
        }
    }

    goToPage = (index: number) => {
        const { tabs, onChangeTab } = this.props;
        onChangeTab && onChangeTab(index);
        if (this.props.tab !== undefined) {
            return;
        }
        const maxPage = tabs.length;
        if (index >= 0 && index < maxPage) {
            this.setState({ currentTab: index });
        }
    }

    shouldRenderTab(idx: number) {
        const { prerenderingSiblingsNumber: numOfSibling = 0 } = this.props;
        const { currentTab } = this.state;

        return (idx < (currentTab + numOfSibling + 1) &&
            idx > (currentTab - numOfSibling - 1));
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
            subElements[`${currentTab}`] = children;
        }

        let contentCls = `${prefixCls}-content-wrap`;
        if (animated) {
            contentCls += ` ${contentCls}-animated`;
        }

        const contentStyle = getTransformPropValue(getTransformByIndex(currentTab, tabBarPosition));

        const tabBarProps = {
            goToPage: this.goToPage,
            tabs: tabs,
            activeTab: currentTab,
            animated,
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
                        const component = subElements[key];

                        let cls = `${prefixCls}-pane-wrap`;
                        if (this.state.currentTab === index) {
                            cls += ` ${cls}-actived`;
                        }
                        return <div key={key} className={cls}>
                            {this.shouldRenderTab(index) && component}
                        </div>;
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