import React from 'react';

interface PropsType { shouldUpdate?: boolean; }
export class StaticContainer extends React.PureComponent<PropsType, {}> {
  static defaultProps = { shouldUpdate: true };

  shouldComponentUpdate(nextProps: PropsType, nextState: any, nextContext: any): boolean {
    return !!nextProps.shouldUpdate;
  }

  render() {
    const child = this.props.children;
    if (!child) {
      return null;
    }
    return React.Children.only(child);
  }
}
