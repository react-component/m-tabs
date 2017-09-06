/* tslint:disable:no-console */

import 'rmc-tabs/assets/index.less';

import React from 'react';
import ReactDOM from 'react-dom';
import { Models, Tabs } from '../src';

const tabData = [
  { title: 't1' },
  { title: 't2' },
  { title: 't3' },
  { title: 't4' },
  { title: 't5' },
];

class BasicDemo extends React.Component<{}, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      scData: JSON.stringify({ index: 0, tab: { title: 't1' } }),
    };
  }

  renderContent = (tab: Models.TabData, index: number) =>
    <div>
      <p>single content</p>
      <p>{JSON.stringify({ index: index + Math.random(), tab })}</p>
    </div>

  render() {
    const baseStyle = {
      display: 'flex', flexDirection: 'column', marginTop: 10, marginBottom: 10, fontSize: 14
    } as React.CSSProperties;

    return (
      <div>
        <div style={{ ...baseStyle, height: 240 }}>
          <h2>single content</h2>
          <Tabs tabs={tabData} onChange={(tab, index) => {
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
        </div>
        <div style={{ ...baseStyle, height: 240 }}>
          <h2>single content function</h2>
          <Tabs tabs={tabData}>
            {this.renderContent}
          </Tabs>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<BasicDemo />, document.getElementById('__react-content'));