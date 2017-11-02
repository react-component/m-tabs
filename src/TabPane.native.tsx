import React from 'react';
import { default as RN, View } from 'react-native';

export interface PropsType {
  key?: string;
  style?: RN.ViewStyle;
  active: boolean;
}
export class TabPane extends React.PureComponent<PropsType, {}> {

  render() {
    const { active, ...props } = this.props;
    return <View {...props}>
      {props.children}
    </View>;
  }
}
