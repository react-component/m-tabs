import React from 'react';
import Gesture, { IGestureStatus } from 'rc-gesture';
import { Models } from './Models';
import { TabBarPropsType } from './PropsType';
import { getOffset, setPxStyle, getTransformPropValue, getPxStyle } from './util';

export interface PropsType extends TabBarPropsType {
    /** default: rmc-tabs-tab-bar */
    prefixCls?: string;
    renderTab?: (tab: Models.TabData) => React.ReactNode;
    /** 分页个数，超过将启用scroll模式 default: 5 */
    page?: number;
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
        let tmpOffset = 0;
        let finalOffset = 0;

        return {
            onPanStart: () => {
                tmpOffset = getOffset(this.layout);
                this.setState({ isMoving: true });
            },

            onPanMove: (status: IGestureStatus) => {
                if (!status.moveStatus || !this.layout) return;
                const angle = Math.abs(status.moveStatus.angle);
                if (45 < angle && angle < 135) return;

                let offset = tmpOffset + status.moveStatus.x;
                const canScrollWidth = -this.layout.scrollWidth + this.layout.clientWidth;
                offset = Math.min(offset, 0);
                offset = Math.max(offset, canScrollWidth);
                setPxStyle(this.layout, offset);
                finalOffset = offset;

                this.setState({
                    showPrev: -offset > 0,
                    showNext: offset > canScrollWidth,
                });
            },

            onPanEnd: () => {
                this.setState({
                    isMoving: false,
                    transform: getPxStyle(finalOffset),
                });
            }
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
        if (this.props.activeTab !== nextProps.activeTab) {
            this.setState({
                ... this.getTransformByIndex(nextProps),
            });
        }
    }

    getTransformByIndex = (props: PropsType) => {
        const { activeTab, tabs, page = 0 } = props;

        const width = this.getTabWidth(page, tabs.length);
        let index = Math.min(activeTab, tabs.length - 3);
        const skipWidth = (index - 2) * width;
        return {
            transform: getPxStyle(Math.min(-skipWidth, 0), '%'),
            showPrev: activeTab > 2,
            showNext: activeTab < tabs.length - 3,
        };
    }

    onPress = (index: number) => {
        const { goToTab } = this.props;
        goToTab && goToTab(index);
    }

    renderTab = (t: Models.TabData, i: number, width: number) => {
        const {
            prefixCls, renderTab, activeTab,
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
            onClick={() => this.onPress(i)}
        >
            {renderTab ? renderTab(t) : t.title}
        </div>;
    }

    setContentLayout = (div: HTMLDivElement) => {
        this.layout = div;
    }

    getTabWidth = (page: number, tabLength: number) => 100 / Math.min(page, tabLength);

    render() {
        const {
             prefixCls, animated, tabs = [], page = 0, activeTab = 0,
            tabBarBackgroundColor, tabBarUnderlineStyle
         } = this.props;
        const { isMoving, transform, showNext, showPrev } = this.state;

        const needScroll = tabs.length > page;
        const width = this.getTabWidth(page, tabs.length);

        const Tabs = tabs.map((t, i) => {
            return this.renderTab(t, i, width);
        });

        let cls = prefixCls;
        if (animated && !isMoving) {
            cls += ` ${prefixCls}-animated`;
        }
        if (showPrev) {
            cls += ` ${prefixCls}-prevpage`;
        }
        if (showNext) {
            cls += ` ${prefixCls}-nextpage`;
        }

        let style = {
            backgroundColor: tabBarBackgroundColor || '',
        } as React.CSSProperties;

        let transformStyle = needScroll ? {
            ...getTransformPropValue(transform),
        } : {};

        return <div className={`${cls}`} style={style}>
            <Gesture {...this.onPan }>
                <div className={`${prefixCls}-content`} style={transformStyle} ref={this.setContentLayout}>
                    {Tabs}
                    <div style={{
                        ...tabBarUnderlineStyle,
                        width: `${width}%`,
                        left: `${width * activeTab}%`,
                    }} className={`${prefixCls}-underline`}></div>
                </div>
            </Gesture>
        </div>;
    }
}