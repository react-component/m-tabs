import { Models } from './Models';

export interface TabBarPropsType {
    /** 跳转Tab */
    goToTab: (index: number) => void;
    /** tab数据 */
    tabs: Models.TabData[];
    /** 当前激活Tab索引 */
    activeTab: number;
    /** 是否使用动画 */
    animated: boolean;
    /** TabBar位置 | top: 上, bottom: 下 */
    tabBarPosition?: 'top' | 'bottom'; // TODO left, right

    // TabBar shortcut settings.
    tabBarUnderlineStyle?: React.CSSProperties;
    tabBarBackgroundColor?: string;
    tabBarActiveTextColor?: string;
    tabBarInactiveTextColor?: string;
    tabBarTextStyle?: React.CSSProperties;
}

export interface PropsType {
    /** 样式前缀(web only) | default: rmc-tabs */
    prefixCls?: string;
    /** tab数据 */
    tabs: Models.TabData[];
    /** TabBar位置 | default: top | top: 上, bottom: 下 */
    tabBarPosition?: 'top' | 'bottom'; // TODO left, right
    /** 替换TabBar */
    renderTabBar?: (props: TabBarPropsType) => React.ReactNode;
    /** 初始化Tab, index or key */
    initalPage?: number | string;
    /** 当前Tab, index or key */
    page?: number | string;
    /** 是否可以滑动内容切换 | default: true */
    swipeable?: boolean;
    /** 预加载两侧Tab数量 | default: 1 */
    prerenderingSiblingsNumber?: number;
    /** 是否开启切换动画 | default: true */
    animated?: boolean;
    /** tab变化时触发 */
    onChangeTab?: (index: number, tabData: Models.TabData) => void;
    /** 使用跟手滚动 | default: true */
    useOnPan?: boolean;

    // TabBar shortcut settings.
    tabBarUnderlineStyle?: React.CSSProperties;
    tabBarBackgroundColor?: string;
    tabBarActiveTextColor?: string;
    tabBarInactiveTextColor?: string;
    tabBarTextStyle?: React.CSSProperties;
}