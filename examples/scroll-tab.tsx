/* tslint:disable:no-console */

import 'rmc-tabs/assets/index.less';

import React from 'react';
import ReactDOM from 'react-dom';
import { Models, Tabs, DefaultTabBar } from '../src';

const en = location.search.indexOf('en') !== -1;

const tabData = [
    { title: 't1' },
    { title: 't2' },
    { title: 't3' },
    { title: 't4' },
    { title: 't5' },
    { title: 't6' },
    { title: 't7' },
    { title: 't8' },
    { title: 't9' },
];

class BasicDemo extends React.Component<{}, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            scData: JSON.stringify({ index: 0, tab: { title: 't1' } }),
            scData2: JSON.stringify({ index: 0, tab: { title: 't1' } }),
        };
    }

    renderContent = (index, tab) =>
        <div>
            <p>scrollable tab</p>
            <p>{JSON.stringify({ index: index + Math.random(), tab })}</p>
        </div>

    render() {
        const baseStyle = {
            display: 'flex', flexDirection: 'column', marginTop: 10, marginBottom: 10, fontSize: 14
        } as React.CSSProperties;

        return (
            <div>
                <div style={{ ...baseStyle }}>
                    <h2>normal</h2>
                    <Tabs tabs={tabData} onChangeTab={(index, tab) => {
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
                    <Tabs tabs={tabData} onChangeTab={(index, tab) => {
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
