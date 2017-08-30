import React from 'react';
import { Models } from './Models';

export interface PropsType {
    /** default: rmc-tabs-tab-bar */
    prefixCls?: string;
    /** default: true */
    animated?: boolean;
    activeTab?: number;
    tabs?: Models.TabData[];
    renderTab?: (tab: Models.TabData) => React.ReactNode;
    goToPage?: (index: number) => void;
}
export interface StateType { }

export class DefaultTabBar extends React.PureComponent<PropsType, StateType> {
    static defaultProps = {
        prefixCls: 'rmc-tabs-tab-bar',
        animated: true,
        tabs: [],
    } as PropsType;

    onTap = (index: number) => {
        const { goToPage } = this.props;
        goToPage && goToPage(index);
    }

    render() {
        const { prefixCls, animated, tabs = [], activeTab = 0, renderTab } = this.props;

        const Tabs = tabs.map((t, i) => {
            return renderTab ? renderTab(t) :
                <div key={`t_${i}`}
                    style={{ width: `${100 / tabs.length}%` }}
                    className={`${prefixCls}-tab`}
                    onClick={() => this.onTap(i)}>
                    {t.title}
                </div>;
        });

        let cls = prefixCls;
        if (animated) {
            cls += ` ${prefixCls}-animated`;
        }

        return <div className={cls}>
            <div className={`${prefixCls}-tabs`}>
                {Tabs}
            </div>
            <div style={{ width: `${100 / tabs.length}%`, marginLeft: `${100 / tabs.length * activeTab}%` }} className={`${prefixCls}-underline`}></div>
        </div>;
    }
}