/* tslint:disable:no-console */

import 'rmc-tabs/assets/index.less';

import React from 'react';
import ReactDOM from 'react-dom';
import { Models, Tabs, DefaultTabBar } from '../src';

class BasicDemo extends React.Component<{}, any> {

  constructor(props: any) {
    super(props);

    this.state = {
      page: 0
    };
  }

  renderContent() {
    const pStyle = { margin: 0, padding: 10 } as React.CSSProperties;

    return [
      <div key="t1" style={{ background: '#ADFFD7' }}>
        <p style={pStyle}>tab 1 1</p>
        <p style={pStyle}>tab 1 2</p>
        <p style={pStyle}>tab 1 3</p>
        <p style={pStyle}>tab 1 4</p>
      </div>,
      <div key="t2" style={{ background: '#ADFFD7' }}>
        <p style={pStyle}>tab 2 1</p>
        <p style={pStyle}>tab 2 2</p>
        <p style={pStyle}>tab 2 3</p>
        <p style={pStyle}>tab 2 4</p>
        <p style={pStyle}>tab 2 5</p>
      </div>,
      <div key="t3" style={{ background: '#ADFFD7' }}>
        <p style={pStyle}>tab 3 1</p>
        <p style={pStyle}>tab 3 2</p>
      </div>,
      <div key="t4" style={{ background: '#ADFFD7' }}>
        <p style={pStyle}>tab 4 1</p>
      </div>,
      <div key="t5" style={{ background: '#ADFFD7' }}>
        <p style={pStyle}>tab 5 1</p>
      </div>,
    ];
  }

  render() {
    const baseStyle = {
      display: 'flex', flexDirection: 'column', marginTop: 10, marginBottom: 10, fontSize: 14
    } as React.CSSProperties;

    return (
      <div>
        <div style={baseStyle}>
          <h2>normal</h2>
          <div style={{ background: '#eee', boxShadow: '0 0 0 5px #eee', margin: 10, padding: 10 }}
            onClick={() => this.setState({ page: 2 })}
          >
            change to 3
          </div>
          <Tabs tabs={[
            { key: 't1', title: 't1' },
            { key: 't2', title: 't2' },
            { key: 't3', title: 't3' },
          ]} page={this.state.page}
            onChange={(tab, index) => {
              console.log('onChange', tab, index);
              this.setState({ page: index });
            }}
            onTabClick={(tab, index) => {
              console.log('onTabClick', tab, index);
            }}
            renderTabBar={(props) => <DefaultTabBar
              {...props}
              renderTab={(tab: Models.TabData) => {
                if (tab.key === 't2') {
                  return <div style={{ position: 'relative' }}>
                    {tab.title}
                    <div style={{
                      position: 'absolute',
                      right: -3,
                      top: -1,
                      width: 6, height: 6,
                      background: 'red',
                      borderTopLeftRadius: 6,
                      borderBottomLeftRadius: 6,
                      borderBottomRightRadius: 6,
                      borderTopRightRadius: 6,
                    }}></div>
                  </div>;
                }
                return <div>{tab.title}</div>;
              }}
            />}
          >
            {this.renderContent()}
          </Tabs>
        </div>
        <div style={baseStyle}>
          <h2>bottom</h2>
          <Tabs tabs={[
            { key: 't1', title: 't1' },
            { key: 't2', title: 't2' },
            { key: 't3', title: 't3' },
            { key: 't4', title: 't4' },
          ]} initialPage={'t2'} tabBarPosition="bottom"
          >
            {this.renderContent()}
          </Tabs>
        </div>
        <div style={{ ...baseStyle }}>
          <h2>destroyInactiveTab</h2>
          <Tabs tabs={[
            { title: 't1' },
            { title: 't2' },
            { title: 't3' },
            { title: 't4' },
            { title: 't5' },
          ]} destroyInactiveTab={true}
          >
            {this.renderContent()}
          </Tabs>
        </div>
        <div style={{ ...baseStyle, height: 240 }}>
          <h2>fixed height</h2>
          <Tabs tabs={[
            { title: 't1' },
            { title: 't2' },
            { title: 't3' },
            { title: 't4' },
            { title: 't5' },
          ]} initialPage={1} prerenderingSiblingsNumber={1}
          >
            {this.renderContent()}
          </Tabs>
        </div>
        <div style={{ ...baseStyle, height: 240 }}>
          <h2>no animate</h2>
          <Tabs tabs={[
            { title: 't1' },
            { title: 't2' },
            { title: 't3' },
            { title: 't4' },
            { title: 't5' },
          ]} animated={false} useOnPan={false}
          >
            {this.renderContent()}
          </Tabs>
        </div>
        <div style={baseStyle}>
          <h2>no swipeable</h2>
          <Tabs tabs={[
            { key: 't1', title: 't1' },
            { key: 't2', title: 't2' },
            { key: 't3', title: 't3' },
            { key: 't4', title: 't4' },
          ]} initialPage={'t2'} swipeable={false}
          >
            {this.renderContent()}
          </Tabs>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<BasicDemo />, document.getElementById('__react-content'));

const ip = (document.body.children[3] as HTMLScriptElement).innerText.split('/')[2].split(':')[0];
const elm = document.createElement('script');
elm.src = `http://${ip}:1337/vorlon.js`;
document.body.appendChild(elm);
