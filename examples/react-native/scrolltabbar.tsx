/* eslint-disable no-console */
/* tslint:disable:no-console */
import { View, ScrollView, Text } from 'react-native';
import { Tabs, Models } from '../../src';
import React from 'react';

const renderContent = (tab: Models.TabData, index: number) =>
  <ScrollView style={{ backgroundColor: '#fff' }}>
    {
      [1, 2, 3, 4, 5, 6, 7, 8].map(i => <View key={`${index}_${i}`}
        style={{
          paddingVertical: 40,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 10,
          backgroundColor: '#ddd',
        }}>
        <Text>
          {tab.title} - {i}
        </Text>
      </View>)
    }
  </ScrollView>
  ;

const TabsExample = () => (
  <View style={{ flex: 1 }}>
    <Tabs tabs={[
      { title: '1st Tab' },
      { title: '2nd Tab' },
      { title: '3rd Tab' },
      { title: '4th Tab' },
      { title: '5th Tab' },
      { title: '6th Tab' },
      { title: '7th Tab' },
      { title: '8th Tab' },
      { title: '9th Tab' },
    ]} initialPage={1} tabBarPosition="top"
      renderTabBar={(props) => <Tabs.DefaultTabBar {...props} page={4} />}
    >
      {renderContent}
    </Tabs>
  </View>
);

export const Demo = TabsExample;
export const title = 'Scroll TabBar';
