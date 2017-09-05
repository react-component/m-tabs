import React from 'react';
import { StaticContainer } from './StaticContainer';
import { getPxStyle, getTransformPropValue } from './util';

export interface PropsType {
    key?: string;
    className?: string;
    shouldUpdate: boolean;
    active: boolean;
}
export class TabPane extends React.PureComponent<PropsType, {}> {
    layout: HTMLDivElement;
    offset = 0;

    componentWillReceiveProps(nextProps: PropsType) {
        if (this.props.active !== nextProps.active) {
            if (nextProps.active) {
                this.offset = 0;
            } else {
                this.offset = this.layout.scrollTop;
            }
        }
    }

    setLayout = (div: HTMLDivElement) => {
        this.layout = div;
    }

    render() {
        const { shouldUpdate, active, ...props } = this.props;
        return <div {...props} style={this.offset ? {
            ...getTransformPropValue(getPxStyle(-this.offset, 'px', true))
        } : {}} ref={this.setLayout}>
            <StaticContainer shouldUpdate={shouldUpdate}>
                {props.children}
            </StaticContainer>
        </div>;
    }
}