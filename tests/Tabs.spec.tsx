import React from 'react';
import { render } from 'enzyme';
import renderToJson from 'enzyme-to-json';
import { Tabs, Models } from '../src';

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
};

describe('basic', () => {
  it('base.', () => {
    const wrapper = render(
      <Tabs tabs={tabData}
      >
        {renderContent()}
      </Tabs>
    );
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });

  it('no animation.', () => {
    const wrapper = render(
      <Tabs tabs={tabData}
        animated={false}
      >
        {renderContent()}
      </Tabs>
    );
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });

  it('inital tab.', () => {
    const wrapper = render(
      <Tabs tabs={tabData}
        initialPage={'t2'}
      >
        {renderContent()}
      </Tabs>
    );
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });

  it('tabBarPosition.', () => {
    const wrapper = render(
      <Tabs tabs={tabData}
        tabBarPosition="bottom"
      >
        {renderContent()}
      </Tabs>
    );
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });

  it('prerenderingSiblingsNumber.', () => {
    const wrapper = render(
      <Tabs tabs={tabData}
        prerenderingSiblingsNumber={1}
      >
        {renderContent()}
      </Tabs>
    );
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });

  it('destroyInactiveTab.', () => {
    const wrapper = render(
      <Tabs tabs={tabData}
        destroyInactiveTab={true}
        initialPage={2}
        prerenderingSiblingsNumber={0}
      >
        {renderContent()}
      </Tabs>
    );
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });

  it('renderTabBar renderTab.', () => {
    const wrapper = render(
      <Tabs tabs={tabData}
        renderTabBar={(props) => <Tabs.DefaultTabBar
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
        {renderContent()}
      </Tabs>
    );
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });
});

describe('single content.', () => {
  it('function', () => {
    const wrapper = render(
      <Tabs tabs={tabDataWithoutKey}
      >
        {
          (tab: Models.TabData, index: number) =>
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
      <Tabs tabs={tabDataWithoutKey}
      >
        <div>
          <p>single content</p>
        </div>
      </Tabs>
    );
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });
});
