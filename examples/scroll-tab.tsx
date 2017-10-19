/* tslint:disable:no-console */

import 'rmc-tabs/assets/index.less';

import React from 'react';
import ReactDOM from 'react-dom';
import { Tabs, DefaultTabBar } from '../src';

const tabData = [
  { title: 'title 1' },
  { title: 'title 2' },
  { title: 'title 3' },
  { title: 'title 4' },
  { title: 'title 5' },
  { title: 'title 6' },
  { title: 'title 7' },
  { title: 'title 8' },
  { title: 'title 9' },
];

class BasicDemo extends React.Component<{}, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      scData: JSON.stringify({ index: 0, tab: { title: 't1' } }),
      scData2: JSON.stringify({ index: 0, tab: { title: 't1' } }),
      dynamicTabs: [] as { title: string }[],
    };
  }

  render() {
    const baseStyle = {
      display: 'flex', flexDirection: 'column', marginTop: 10, marginBottom: 10, fontSize: 14
    } as React.CSSProperties;

    return (
      <div>
        <div style={{ ...baseStyle }}>
          <h2>normal</h2>
          <Tabs tabs={tabData} onChange={(tab, index) => {
            this.setState({
              scData: JSON.stringify({ index: index + Math.random(), tab })
            });
          }} renderTabBar={(props) => <DefaultTabBar {...props} />}
          >
            <div style={{ padding: 10, background: '#ADFFD7' }}>
              <p>single content</p>
              <p>{this.state.scData}</p>
              <p>single content</p>
              <p>single content</p>
              <p>single content</p>
            </div>
          </Tabs>
          <h2>page</h2>
          <Tabs tabs={tabData} onChange={(tab, index) => {
            this.setState({
              scData2: JSON.stringify({ index: index + Math.random(), tab })
            });
          }} renderTabBar={(props) => <DefaultTabBar {...props} page={4} />}
          >
            <div style={{ padding: 10, background: '#ADFFD7' }}>
              <p>single content</p>
              <p>{this.state.scData2}</p>
              <p>single content</p>
              <p>single content</p>
              <p>single content</p>
            </div>
          </Tabs>
          <h2>add page</h2>
          <div style={{ background: '#eee', boxShadow: '0 0 0 5px #eee', margin: 10, padding: 10 }}
            onClick={() => {
              this.setState({
                dynamicTabs: [
                  ...this.state.dynamicTabs,
                  { title: 'title-' + this.state.dynamicTabs.length + 1 }
                ],
              });
            }}
          >
            add page
          </div>
          <Tabs tabs={this.state.dynamicTabs} onChange={(tab, index) => {
            this.setState({
              scData2: JSON.stringify({ index: index + Math.random(), tab })
            });
          }} renderTabBar={(props) => <DefaultTabBar {...props} page={3} />}
          >
            <div style={{ padding: 10, background: '#ADFFD7' }}>
              <p>single content</p>
              <p>{this.state.scData2}</p>
              <p>single content</p>
              <p>single content</p>
              <p>single content</p>
            </div>
          </Tabs>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<BasicDemo />, document.getElementById('__react-content'));
