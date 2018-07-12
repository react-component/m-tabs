import React from 'react';
import { getPxStyle, getTransformPropValue } from './util';

export interface PropsType {
  key?: string;
  className?: string;
  role?: string;
  active: boolean;
  fixX?: boolean;
  fixY?: boolean;
}
export class TabPane extends React.PureComponent<PropsType, {}> {
  static defaultProps = {
    fixX: true,
    fixY: true,
  };
  layout: HTMLDivElement;
  offsetX = 0;
  offsetY = 0;

  componentWillReceiveProps(nextProps: PropsType & { children?: React.ReactNode }) {
    if (this.props.active !== nextProps.active) {
      if (nextProps.active) {
        this.offsetX = 0;
        this.offsetY = 0;
      } else {
        this.offsetX = this.layout.scrollLeft;
        this.offsetY = this.layout.scrollTop;
      }
    }
  }

  setLayout = (div: HTMLDivElement) => {
    this.layout = div;
  }

  render() {
    const { active, fixX, fixY, ...props } = this.props;
    let style = {
      ...fixX && this.offsetX ? getTransformPropValue(getPxStyle(-this.offsetX, 'px', false)) : {},
      ...fixY && this.offsetY ? getTransformPropValue(getPxStyle(-this.offsetY, 'px', true)) : {},
    };

    return <div {...props} style={style} ref={this.setLayout}>
      {props.children}
    </div>;
  }
}
