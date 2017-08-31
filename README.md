# rmc-tabs
---

React Mobile Tabs Component (web)


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
<Tabs tabData={[
    { key: 't1', title: 't1' },
    { key: 't2', title: 't2' },
    { key: 't3', title: 't3' },
    { key: 't4', title: 't4' },
    { key: 't5', title: 't5' },
]} initalTab={'t2'}
>
    <div><p>content1</p></div>
    <div><p>content2</p></div>
    <div><p>content3</p></div>
    <div><p>content4</p></div>
    <div><p>content5</p></div>
</Tabs>

// single content
<Tabs tabData={[
    { title: 't1' },
    { title: 't2' },
    { title: 't3' },
    { title: 't4' },
    { title: 't5' },
]} onChangeTab={(index, tab) => {
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
<Tabs tabData={[
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
```

## API
### Tabs:
属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
prefixCls|样式前缀(web only)|string| rmc-tabs|false
style|样式|React.CSSProperties||false
tabs|tab数据|Models.TabData[]||true
tabBarPosition|TabBar位置 top: 上, bottom: 下|'top' \| 'bottom' // TODO left, right| top|false
renderTabBar|替换TabBar|(props: TabBarPropsType) => React.ReactNode||false
initalPage|初始化Tab, index or key|number \| string||false
page|当前Tab, index or key|number \| string||false
swipeable|是否可以滑动内容切换|boolean| true|false
prerenderingSiblingsNumber|预加载两侧Tab数量|number| 0|false
animated|是否开启切换动画|boolean| true|false
onChangeTab|tab变化时触发|(index: number, tabData: Models.TabData) => void||false

### TabBarPropsType（Common）:
属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
goToTab|跳转Tab|(index: number) => void||true
tabs|tab数据|Models.TabData[]||true
activeTab|当前激活Tab索引|number||true
animated|是否使用动画|boolean||true
tabBarPosition|TabBar位置 top: 上, bottom: 下|'top' \| 'bottom' // TODO left, right||false

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
