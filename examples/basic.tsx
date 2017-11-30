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

  canvasTest = (canvas: HTMLCanvasElement) => {
    if (canvas && canvas.getContext) {
      const context = canvas.getContext('2d');
      context!.fillStyle = 'red';
      context!.fillRect(10, 10, 50, 50);
      context!.fillStyle = 'rgba(0,0,255,0.5)';
      context!.fillRect(30, 30, 50, 50);
      context!.strokeStyle = 'red';
      context!.strokeRect(10, 90, 50, 50);
      context!.strokeStyle = 'rgba(0,0,255,0.5)';
      context!.strokeRect(30, 120, 50, 50);
      context!.clearRect(30, 30, 30, 30);
    }
  }

  renderContent(data?: any) {
    const pStyle = { margin: 0, padding: 10 } as React.CSSProperties;

    return [
      <div key="t1" style={{ background: '#CCFFFF', overflow: 'hidden' }}>
        <p style={pStyle}>tab 1 1</p>
        <p style={pStyle}>tab 1 2</p>
        <p style={pStyle}>tab 1 3</p>
        <p style={pStyle}>tab 1 4</p>
      </div>,
      <div key="t2" style={{ background: '#00CCFF', overflow: 'hidden' }}>
        <canvas ref={this.canvasTest} style={{ height: 200 }}></canvas>
      </div>,
      <div key="t3" style={{ background: '#0099FF', overflow: 'hidden' }}>
        <p style={pStyle}>tab 3 1</p>
        <p style={pStyle}>tab 3 2</p>
        <p style={pStyle}>{JSON.stringify(data)}</p>
      </div>,
      <div key="t4" style={{ background: '#99FF66', overflow: 'hidden' }}>
        <p style={pStyle}>tab 4 1</p>
      </div>,
      <div key="t5" style={{ background: '#CCFF66', overflow: 'hidden' }}>
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
            onClick={() => this.setState({ page: 2, data: Math.random() })}
          >
            change to 3
          </div>
          <div style={{ background: '#eee', boxShadow: '0 0 0 5px #eee', margin: 10, padding: 10 }}
            onClick={() => this.setState({ data: Math.random() })}
          >
            change data
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
            {this.renderContent(this.state.data)}
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
          ]} animated={false}
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
        <div style={baseStyle}>
          <h2>no paged</h2>
          <Tabs tabs={[
            { key: 't1', title: 't1' },
            { key: 't2', title: 't2' },
            { key: 't3', title: 't3' },
            { key: 't4', title: 't4' },
          ]} initialPage={'t2'} usePaged={false}
          >
            {this.renderContent()}
          </Tabs>
        </div>
        <div style={baseStyle}>
          <h2>no render content</h2>
          <Tabs tabs={[
            { key: 't1', title: 't1' },
            { key: 't2', title: 't2' },
            { key: 't3', title: 't3' },
            { key: 't4', title: 't4' },
          ]} initialPage={'t2'} usePaged={false}
            noRenderContent={true}
          >
            {this.renderContent()}
          </Tabs>
        </div>
        <div style={baseStyle}>
          <h2>use left instead of tansform</h2>
          <Tabs tabs={[
            { key: 't1', title: 't1' },
            { key: 't2', title: 't2' },
            { key: 't3', title: 't3' },
            { key: 't4', title: 't4' },
          ]} initialPage={'t2'} usePaged={false}
            useLeftInsteadTransform={true}
          >
            {this.renderContent()}
          </Tabs>
        </div>
        <div style={baseStyle}>
          <h2>custom underline</h2>
          <Tabs tabs={[
            { key: 't1', title: 't1' },
            { key: 't2', title: 't2' },
            { key: 't3', title: 't3' },
            { key: 't4', title: 't4' },
          ]} initialPage={'t2'}
            renderTabBar={(props) => <DefaultTabBar
              {...props}
              renderUnderline={(ulProps) => {
                const { style, ...otherProps } = ulProps;
                const ulStyle = {
                  ...style,
                  border: 'none',
                };
                return (
                  <div style={ulStyle} {...otherProps}>
                    <div style={{
                      width: 50,
                      height: 2,
                      backgroundColor: 'red',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}></div>
                  </div>
                );
              }}
            />}
          >
            {this.renderContent()}
          </Tabs>
        </div>
      </div >
    );
  }
}

ReactDOM.render(<BasicDemo />, document.getElementById('__react-content'));

const ip = (document.body.children[3] as HTMLScriptElement).innerText.split('/')[2].split(':')[0];
const elm = document.createElement('script');
elm.src = `http://${ip}:1337/vorlon.js`;
document.body.appendChild(elm);
