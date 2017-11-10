/* tslint:disable:no-console */

import 'rmc-tabs/assets/index.less';

import React from 'react';
import ReactDOM from 'react-dom';
import { Tabs } from '../src';

class BasicDemo extends React.Component<{}, {
}> {

  constructor(props: any) {
    super(props);
  }

  renderContent() {
    const pStyle = { margin: 0, padding: 10 } as React.CSSProperties;

    return [
      <div key="1" style={{ background: '#ADFFD7' }}>
        <p style={pStyle}>tab 1 1</p>
        <p style={pStyle}>tab 1 2</p>
        <p style={pStyle}>tab 1 3</p>
        <p style={pStyle}>tab 1 4</p>
      </div>,
      <div key="2" style={{ background: '#ADFFD7' }}>
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
      <div key="3" style={{ background: '#ADFFD7' }}>tab 3</div>,
      <div key="4" style={{ background: '#ADFFD7' }}>tab 4</div>,
      <div key="5" style={{ background: '#ADFFD7' }}>tab 5</div>,
      <div key="6" style={{ background: '#ADFFD7' }}>tab 6</div>,
      <div key="7" style={{ background: '#ADFFD7' }}>tab 7</div>,
      <div key="8" style={{ background: '#ADFFD7' }}>tab 8</div>,
      <div key="9" style={{ background: '#ADFFD7' }}>tab 9</div>,
    ];
  }

  render() {
    const baseStyle = {
      display: 'flex', flexDirection: 'column', marginTop: 10, marginBottom: 10, fontSize: 14
    } as React.CSSProperties;

    return (
      <div>
        <div style={baseStyle}>
          <h2>vertical</h2>
          <Tabs tabs={[
            { title: 't1' },
            { title: 't2' },
            { title: 't3' },
            { title: 't4' },
            { title: 't5' },
          ]} tabBarPosition="left"
          >
            {this.renderContent()}
          </Tabs>
        </div>
        <div style={{ ...baseStyle, height: 200 }}>
          <h2>vertical fixed height</h2>
          <Tabs tabs={[
            { title: 't1' },
            { title: 't2' },
            { title: 't3' },
            { title: 't4' },
            { title: 't5' },
          ]} tabBarPosition="left" tabDirection="vertical"
          >
            {this.renderContent()}
          </Tabs>
        </div>
        <div style={{ ...baseStyle, height: 200 }}>
          <h2>vertical right</h2>
          <Tabs tabs={[
            { title: 't1' },
            { title: 't2' },
            { title: 't3' },
            { title: 't4' },
            { title: 't5' },
          ]} tabBarPosition="right" tabDirection="vertical"
          >
            {this.renderContent()}
          </Tabs>
        </div>
        <div style={{ ...baseStyle, height: 200 }}>
          <h2>no paged</h2>
          <Tabs tabs={[
            { title: 't1' },
            { title: 't2' },
            { title: 't3' },
            { title: 't4' },
            { title: 't5' },
          ]} tabBarPosition="right" tabDirection="vertical" usePaged={false}
          >
            {this.renderContent()}
          </Tabs>
        </div>
        <div style={{ ...baseStyle, height: 200 }}>
          <h2>vertical right</h2>
          <Tabs tabs={[
            { title: 't1' },
            { title: 't2' },
            { title: 't3' },
            { title: 't4' },
            { title: 't5' },
            { title: 't6' },
            { title: 't7' },
            { title: 't8' },
          ]} tabBarPosition="left" tabDirection="vertical"
          >
            {this.renderContent()}
          </Tabs>
        </div>
        <div style={{ ...baseStyle, height: 200 }}>
          <h2>useLeftInsteadTransform</h2>
          <Tabs tabs={[
            { title: 't1' },
            { title: 't2' },
            { title: 't3' },
            { title: 't4' },
            { title: 't5' },
            { title: 't6' },
            { title: 't7' },
            { title: 't8' },
          ]} tabBarPosition="left" tabDirection="vertical"
            useLeftInsteadTransform={true}
          >
            {this.renderContent()}
          </Tabs>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<BasicDemo />, document.getElementById('__react-content'));
