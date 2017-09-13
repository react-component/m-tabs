import React from 'react';
import { StaticContainer } from './StaticContainer';
import { getPxStyle, getTransformPropValue } from './util';

export interface PropsType {
  key?: string;
  className?: string;
  shouldUpdate: boolean;
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
  emptyContent = false;

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
    this.emptyContent = !(this.props.children && nextProps.children);
  }

  setLayout = (div: HTMLDivElement) => {
    this.layout = div;
  }

  render() {
    const { shouldUpdate, active, fixX, fixY, ...props } = this.props;
    let style = {
      ...fixX && this.offsetX ? getTransformPropValue(getPxStyle(-this.offsetX, 'px', false)) : {},
      ...fixY && this.offsetY ? getTransformPropValue(getPxStyle(-this.offsetY, 'px', true)) : {},
    };

    return <div {...props} style={style} ref={this.setLayout}>
      <StaticContainer shouldUpdate={this.emptyContent || shouldUpdate}>
        {props.children}
      </StaticContainer>
    </div>;
  }
}
