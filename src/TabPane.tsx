import React from 'react';
import { StaticContainer } from './StaticContainer';

export const TabPane = (Props: any) => {
    const { shouldUpdate, ...props } = Props;
    return <div {...props}>
        <StaticContainer shouldUpdate={shouldUpdate}>
            {props.children}
        </StaticContainer>
    </div>;
};