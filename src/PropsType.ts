import { Models } from './Models';

export interface TabBarPropsType {
  /** goto Tab */
  goToTab: (index: number) => void;
  /** tabs data */
  tabs: Models.TabData[];
  /** current active tab */
  activeTab: number;
  /** use animate | default: true */
  animated: boolean;
  /** render the tab of tabbar */
  renderTab?: (tab: Models.TabData) => React.ReactNode;
  /** page size of tabbar's tab | default: 5 */
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
  /** tabs data */
  tabs: Models.TabData[];
  /** TabBar's position | default: top */
  tabBarPosition?: 'top' | 'bottom'; // TODO left, right
  /** render of TabBar */
  renderTabBar?: ((props: TabBarPropsType) => React.ReactNode) | false;
  /** initial Tab, index or key */
  initialPage?: number | string;
  /** current tab, index or key */
  page?: number | string;
  /** can swipe | default: true */
  swipeable?: boolean;
  /** use scroll follow pan | default: true */
  useOnPan?: boolean;
  /** the number of prerender sibling tab | default: 1 */
  prerenderingSiblingsNumber?: number;
  /** use animate | default: true */
  animated?: boolean;
  /** on change tab */
  onChange?: (tab: Models.TabData, index: number) => void;
  /** on tab click */
  onTabClick?: (tab: Models.TabData, index: number) => void;
  /** destroy inactive tab | default: false */
  destroyInactiveTab?: boolean;

  // TabBar shortcut settings.
  /** tabBar underline style */
  tabBarUnderlineStyle?: React.CSSProperties | any;
  /** tabBar background color */
  tabBarBackgroundColor?: string;
  /** tabBar active text color */
  tabBarActiveTextColor?: string;
  /** tabBar inactive text color */
  tabBarInactiveTextColor?: string;
  /** tabBar text style */
  tabBarTextStyle?: React.CSSProperties | any;
}
