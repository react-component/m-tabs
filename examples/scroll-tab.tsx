/* tslint:disable:no-console */

import 'rmc-tabs/assets/index.less';

import React from 'react';
import ReactDOM from 'react-dom';
import { Tabs, DefaultTabBar } from '../src';

const tabData = [
  { title: 'tit 1' },
  { title: 'tit 2' },
  { title: 'tit 3' },
  { title: 'tit 4' },
  { title: 'tit 5' },
  { title: 'tit 6' },
  { title: 'tit 7' },
  { title: 'tit 8' },
  { title: 'tit 9' },
];

class BasicDemo extends React.Component<{}, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      scData: JSON.stringify({ index: 0, tab: { title: 't1' } }),
      scData2: JSON.stringify({ index: 0, tab: { title: 't1' } }),
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
        </div>
      </div>
    );
  }
}

ReactDOM.render(<BasicDemo />, document.getElementById('__react-content'));
