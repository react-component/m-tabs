import React from 'react';
import { default as RN, View } from 'react-native';
import { StaticContainer } from './StaticContainer';

export interface PropsType {
  key?: string;
  style?: RN.ViewStyle;
  className?: string;
  shouldUpdate: boolean;
  active: boolean;
}
export class TabPane extends React.PureComponent<PropsType, {}> {
  emptyContent = false;

  componentWillReceiveProps(nextProps: PropsType & { children?: React.ReactNode }) {
    this.emptyContent = !(this.props.children && nextProps.children);
  }

  render() {
    const { shouldUpdate, active, ...props } = this.props;
    return <View {...props}>
      <StaticContainer shouldUpdate={this.emptyContent || shouldUpdate}>
        {props.children}
      </StaticContainer>
    </View>;
  }
}
