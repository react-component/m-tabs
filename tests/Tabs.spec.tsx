import React from 'react';
import { render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import { Tabs } from '../src';

const tabData = [
    { key: 't1', title: 't1' },
    { key: 't2', title: 't2' },
    { key: 't3', title: 't3' },
    { key: 't4', title: 't4' },
    { key: 't5', title: 't5' },
];
const tabDataWithoutKey = [
    { title: 't1' },
    { title: 't2' },
    { title: 't3' },
    { title: 't4' },
    { title: 't5' },
];

const renderContent = () => {
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

describe('basic', () => {
    it('base.', () => {
        const wrapper = render(
            <Tabs tabData={tabData}
            >
                {renderContent()}
            </Tabs>
        );
        expect(renderToJson(wrapper)).toMatchSnapshot();
    });

    it('no animation.', () => {
        const wrapper = render(
            <Tabs tabData={tabData}
                animated={false}
            >
                {renderContent()}
            </Tabs>
        );
        expect(renderToJson(wrapper)).toMatchSnapshot();
    });

    it('inital tab.', () => {
        const wrapper = render(
            <Tabs tabData={tabData}
                initalTab={'t2'}
            >
                {renderContent()}
            </Tabs>
        );
        expect(renderToJson(wrapper)).toMatchSnapshot();
    });

    it('tabBarPosition.', () => {
        const wrapper = render(
            <Tabs tabData={tabData}
                tabBarPosition="bottom"
            >
                {renderContent()}
            </Tabs>
        );
        expect(renderToJson(wrapper)).toMatchSnapshot();
    });

    it('prerenderingSiblingsNumber.', () => {
        const wrapper = render(
            <Tabs tabData={tabData}
                prerenderingSiblingsNumber={1}
            >
                {renderContent()}
            </Tabs>
        );
        expect(renderToJson(wrapper)).toMatchSnapshot();
    });
});

describe('single content.', () => {
    it('function', () => {
        const wrapper = render(
            <Tabs tabData={tabDataWithoutKey}
            >
                {
                    (index, tab) =>
                        <div>
                            <p>single content</p>
                            <p>{JSON.stringify({ index, tab })}</p>
                        </div>
                }
            </Tabs>
        );
        expect(renderToJson(wrapper)).toMatchSnapshot();
    });

    it('base', () => {
        const wrapper = render(
            <Tabs tabData={tabDataWithoutKey}
            >
                <div>
                    <p>single content</p>
                </div>
            </Tabs>
        );
        expect(renderToJson(wrapper)).toMatchSnapshot();
    });
});