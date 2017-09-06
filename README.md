# rmc-tabs
---

React Mobile Tabs Component (web & react-native), inspired by [react-native-scrollable-tab-view](https://github.com/skv-headless/react-native-scrollable-tab-view)

[![NPM version][npm-image]][npm-url]
![react](https://img.shields.io/badge/react-%3E%3D_15.2.0-green.svg)
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/rmc-tabs.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rmc-tabs
[travis-image]: https://img.shields.io/travis/react-component/m-tabs.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/m-tabs
[coveralls-image]: https://img.shields.io/coveralls/react-component/m-tabs.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/m-tabs?branch=master
[gemnasium-image]: http://img.shields.io/gemnasium/react-component/m-tabs.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/react-component/m-tabs
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/rmc-tabs.svg?style=flat-square
[download-url]: https://npmjs.org/package/rmc-tabs

## Screenshots

## Development

```
npm i 
npm start
```

## Example

http://localhost:8000/examples/

online example: http://react-component.github.io/m-tabs/


## install

[![rmc-tabs](https://nodei.co/npm/rmc-tabs.png)](https://npmjs.org/package/rmc-tabs)


# docs

## Usage
```jsx
// normal
<Tabs tabs={[
    { key: 't1', title: 't1' },
    { key: 't2', title: 't2' },
    { key: 't3', title: 't3' },
    { key: 't4', title: 't4' },
    { key: 't5', title: 't5' },
]} initalPage={'t2'}
>
    <div><p>content1</p></div>
    <div><p>content2</p></div>
    <div><p>content3</p></div>
    <div><p>content4</p></div>
    <div><p>content5</p></div>
</Tabs>

// single content
<Tabs tabs={[
    { title: 't1' },
    { title: 't2' },
    { title: 't3' },
    { title: 't4' },
    { title: 't5' },
]} onChange={(tab, index) => {
    this.setState({
        scData: JSON.stringify({ index: index + Math.random(), tab })
    });
}}
>
    <div>
        <p>single content</p>
        <p>{this.state.scData}</p>
    </div>
</Tabs>

// single content function
<Tabs tabs={[
    { title: 't1' },
    { title: 't2' },
    { title: 't3' },
    { title: 't4' },
    { title: 't5' },
]}
>
    {
        (index, tab) =>
            <div>
                <p>single content</p>
                <p>{JSON.stringify({ index: index + Math.random(), tab })}</p>
            </div>
    }
</Tabs>

// renderTabBar e.g: Sticky, react-sticky
<StickyContainer>
    <Tabs tabs={[
        { title: 't1' },
        { title: 't2' },
        { title: 't3' },
        { title: 't4' },
        { title: 't5' },
    ]} renderTabBar={(props) => {
            return <Sticky style={{ zIndex: 1 }}>
                <DefaultTabBar {...props} />
            </Sticky>;
        }}
    >
        ...
    </Tabs>
</StickyContainer>
```

## react-native

```
./node_modules/rc-tools run react-native-init
react-native run-ios
```

## API
### Tabs:
属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
prefixCls | prefix class (web only) | string |  rmc-tabs | false
tabs | tabs data | Models.TabData[] |  | true
tabBarPosition | TabBar's position top, bottom | 'top' \| 'bottom' // TODO left, right |  top | false
renderTabBar | replace the TabBar | ((props: TabBarPropsType) => React.ReactNode) \| false |  | false
initialPage | the tab when inital, index or key | number \| string |  | false
page | current tab, index or key | number \| string |  | false
swipeable | Whether to switch tabs with swipe gestrue in the content | boolean |  true | false
useOnPan | 使用跟手滚动 | boolean |  true | false
prerenderingSiblingsNumber  | pre-render nearby # sibling, Infinity: render all the siblings, 0: render current page. | number | 1 | false
animated | Whether to change tabs with animation | boolean |  true | false
onChange | Callback when tab is switched | (tabData: Models.TabData, index: number) => void |  | false
tabBarUnderlineStyle | style of the default tab bar's underline | React.CSSProperties \| any |  | false
tabBarBackgroundColor | color of the default tab bar's background | string |  | false
tabBarActiveTextColor | color of the default tab bar's text when active | string |  | false
tabBarInactiveTextColor | color of the default tab bar's text when inactive | string |  | false
tabBarTextStyle | tional styles to the tab bar's text | React.CSSProperties \| any |  | false
onTabClick  | on tab click | (tab: Models.TabData, index: number) => void |  | false

### TabBarPropsType（Common）:
属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
goToTab | call this function to switch tab | (index: number) => void | | true
tabs | tabs data | Models.TabData[] | | true
activeTab | current active tab | number | | true
animated | Whether to change tabs with animation | boolean | | true
tabBarPosition | TabBar's position | 'top' \| 'bottom' // TODO left, right | | false
onTabClick  | on tab click | (tab: Models.TabData, index: number) => void |  | false

## Test Case

```
npm test
npm run chrome-test
```

## Coverage

```
npm run coverage
```

open coverage/ dir

## License

rmc-tabs is released under the MIT license.