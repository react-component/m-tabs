import React from 'react';

export class StaticContainer extends React.Component<{ shouldUpdate?: boolean } & React.HTMLAttributes<any>, {}> {
    static defaultProps = { shouldUpdate: true };

    shouldComponentUpdate(nextProps: any): boolean {
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