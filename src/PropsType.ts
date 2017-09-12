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
  /** 替换Tab渲染 */
  renderTab?: (tab: Models.TabData) => React.ReactNode;
  /** 分页个数，超过将启用scroll模式 default: 5 */
  page?: number;
  /** on tab click */
  onTabClick?: (tab: Models.TabData, index: number) => void;

  // TabBar shortcut settings.
  tabBarUnderlineStyle?: React.CSSProperties | any;
  tabBarBackgroundColor?: string;
  tabBarActiveTextColor?: string;
  tabBarInactiveTextColor?: string;
  tabBarTextStyle?: React.CSSProperties | any;
}

export interface PropsType {
  /** 样式前缀(web only) | default: rmc-tabs */
  prefixCls?: string;
  /** tab数据 */
  tabs: Models.TabData[];
  /** TabBar位置 | default: top | top: 上, bottom: 下 */
  tabBarPosition?: 'top' | 'bottom'; // TODO left, right
  /** 替换TabBar */
  renderTabBar?: ((props: TabBarPropsType) => React.ReactNode) | false;
  /** 初始化Tab, index or key */
  initialPage?: number | string;
  /** 当前Tab, index or key */
  page?: number | string;
  /** 是否可以滑动内容切换 | default: true */
  swipeable?: boolean;
  /** 使用跟手滚动 | default: true */
  useOnPan?: boolean;
  /** 预加载两侧Tab数量 | default: 1 */
  prerenderingSiblingsNumber?: number;
  /** 是否开启切换动画 | default: true */
  animated?: boolean;
  /** tab变化时触发 */
  onChange?: (tab: Models.TabData, index: number) => void;
  /** on tab click */
  onTabClick?: (tab: Models.TabData, index: number) => void;
  /** 销毁不会动Tab | default: false */
  destroyInactiveTab?: boolean;

  // TabBar shortcut settings.
  /** tabBar下划线样式 */
  tabBarUnderlineStyle?: React.CSSProperties | any;
  /** tabBar背景色 */
  tabBarBackgroundColor?: string;
  /** tabBar激活Tab文字颜色 */
  tabBarActiveTextColor?: string;
  /** tabBar非激活Tab文字颜色 */
  tabBarInactiveTextColor?: string;
  /** tabBar文字样式 */
  tabBarTextStyle?: React.CSSProperties | any;
}
