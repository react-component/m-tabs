/* tslint:disable:no-console */

import 'rmc-tabs/assets/index.less';

import React from 'react';
import ReactDOM from 'react-dom';
import { StickyContainer, Sticky } from 'react-sticky';
import { Tabs, DefaultTabBar } from '../src';

class BasicDemo extends React.Component<{}, {
}> {
  state = {
    current: 0,
  };

  tabBarProps: any;

  constructor(props: any) {
    super(props);
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
        <p style={pStyle}>tab 2 6</p>
        <p style={pStyle}>tab 2 7</p>
        <p style={pStyle}>tab 2 8</p>
        <p style={pStyle}>tab 2 9</p>
      </div>,
      <div key="t3" style={{ background: '#ADFFD7' }}>tab 3</div>,
      <div key="t4" style={{ background: '#ADFFD7' }}>tab 4</div>,
      <div key="t5" style={{ background: '#ADFFD7' }}>tab 5</div>,
    ];
  }

  render() {
    const baseStyle = {
      display: 'flex', flexDirection: 'column', position: 'relative',
      marginTop: 10, marginBottom: 10, fontSize: 14,
    } as React.CSSProperties;

    const tabs = [
      { key: 't1', title: 't1' },
      { key: 't2', title: 't2' },
      { key: 't3', title: 't3' },
      { key: 't4', title: 't4' },
      { key: 't5', title: 't5' },
    ];

    return (
      <div>
        <div style={baseStyle}>
          <h2>Sticky</h2>
          <StickyContainer>
            <Tabs tabs={tabs} initialPage={'t2'}
              renderTabBar={(props) => {
                return <Sticky>
                  {({ style }: { style: React.CSSProperties }) => <div style={{ ...style, zIndex: 1 }}><DefaultTabBar {...props} /></div>}
                </Sticky>;
              }}
            >
              {this.renderContent()}
            </Tabs>
          </StickyContainer>
        </div>
        <div style={baseStyle}>
          <h2>Sticky unuse react-sticky</h2>
          <div style={{ position: 'sticky', top: -1, zIndex: 1, background: '#fff' }}>
            <DefaultTabBar
              {...this.tabBarProps}
              activeTab={this.state.current}
            />
          </div>
          <Tabs tabs={tabs} initialPage={'t2'}
            renderTabBar={(props) => {
              if (!this.tabBarProps) { // diff?
                this.tabBarProps = props;
                setTimeout(() => {
                  this.forceUpdate();
                });
              }
              return null;
            }}
            page={this.state.current}
            onChange={(_tab, index) => this.setState({ current: index })}
          >
            {this.renderContent()}
          </Tabs>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<BasicDemo />, document.getElementById('__react-content'));
