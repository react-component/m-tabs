/* tslint:disable:no-console */

import 'rmc-tabs/assets/index.less';

import React from 'react';
import ReactDOM from 'react-dom';
import { Models, Tabs, DefaultTabBar } from '../src';

const en = location.search.indexOf('en') !== -1;

class BasicDemo extends React.Component<{}, {
}> {

    constructor(props: any) {
        super(props);
        this.state = {
            show: false,
            config: {},
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
            <div key="t3" style={{ background: '#ADFFD7' }}>tab 3</div>,
            <div key="t4" style={{ background: '#ADFFD7' }}>tab 4</div>,
            <div key="t5" style={{ background: '#ADFFD7' }}>tab 5</div>,
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
                    <Tabs tabs={[
                        { key: 't1', title: 't1' },
                        { key: 't2', title: 't2' },
                        { key: 't3', title: 't3' },
                        { key: 't4', title: 't4' },
                        { key: 't5', title: 't5' },
                    ]} initalTab={'t2'}
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
                    ]} initalTab={'t2'} tabBarPosition="bottom"
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
                    ]} initalTab={1}
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
            </div>
        );
    }
}

ReactDOM.render(<BasicDemo />, document.getElementById('__react-content'));
