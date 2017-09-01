import React from 'react';
import { Models } from './Models';
import { TabBarPropsType } from './PropsType';

export interface PropsType extends TabBarPropsType {
    /** default: rmc-tabs-tab-bar */
    prefixCls?: string;
    renderTab?: (tab: Models.TabData) => React.ReactNode;
    /** 分页个数，超过将启用scroll模式 default: 5 */
    page?: number;
}
export interface StateType { }

export class DefaultTabBar extends React.PureComponent<PropsType, StateType> {
    static defaultProps = {
        prefixCls: 'rmc-tabs-tab-bar',
        animated: true,
        tabs: [],
        goToTab: () => { },
        activeTab: 0,
        page: 5,
        tabBarUnderlineStyle: {},
        tabBarBackgroundColor: '',
        tabBarActiveTextColor: '',
        tabBarInactiveTextColor: '',
        tabBarTextStyle: {},
    } as PropsType;

    onTap = (index: number) => {
        const { goToTab } = this.props;
        goToTab && goToTab(index);
    }

    renderTab = (t: Models.TabData, i: number, width: number) => {
        const {
            prefixCls, renderTab, activeTab, tabs,
            tabBarTextStyle,
            tabBarActiveTextColor,
            tabBarInactiveTextColor,
        } = this.props;

        const textStyle = { ...tabBarTextStyle } as React.CSSProperties;
        let cls = `${prefixCls}-tab`;
        if (activeTab === i) {
            cls += ` ${cls}-active`;
            if (tabBarActiveTextColor) {
                textStyle.color = tabBarActiveTextColor;
            }
        } else if (tabBarInactiveTextColor) {
            textStyle.color = tabBarInactiveTextColor;
        }

        return <div key={`t_${i}`}
            style={{
                ...textStyle,
                width: `${width}%`,
            }}
            className={cls}
            onClick={() => this.onTap(i)}
            ref={(div) => {
                if (tabs.length > 5 && activeTab === i && div && div.parentElement) {
                    const single = div.parentElement.scrollWidth / tabs.length;
                    div.parentElement.scrollLeft = single * (i - 2);
                }
            }}
        >
            {renderTab ? renderTab(t) : t.title}
        </div>;
    }

    render() {
        const { prefixCls, animated, tabs = [], page = 0, activeTab = 0 } = this.props;
        const needScroll = tabs.length > page;
        const width = 100 / (needScroll ? page : tabs.length);

        const Tabs = tabs.map((t, i) => {
            return this.renderTab(t, i, width);
        });

        let cls = prefixCls;
        if (animated) {
            cls += ` ${prefixCls}-animated`;
        }

        const backcolor = this.props.tabBarBackgroundColor || '#fff';
        return <div className={`${cls}`} style={{
            overflowX: needScroll ? 'auto' : 'hidden',
            backgroundColor: backcolor,
        }}>
            {Tabs}
            <div style={{
                ...this.props.tabBarUnderlineStyle,
                width: `${width}%`,
                left: `${width * activeTab}%`,
            }} className={`${prefixCls}-underline`}></div>
        </div>;
    }
}