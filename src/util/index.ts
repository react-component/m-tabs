export function setTransition(style: any, v: any) {
    style.transition = v;
    style.webkitTransition = v;
    style.MozTransition = v;
}

export function getTransformPropValue(v: any) {
    return {
        transform: v,
        WebkitTransform: v,
        MozTransform: v,
    };
}

export function isVertical(tabBarPosition?: string) {
    return tabBarPosition === 'left' || tabBarPosition === 'right';
}

export function getTransformByIndex(index: number, tabBarPosition?: string) {
    const translate = isVertical(tabBarPosition) ? 'translateY' : 'translateX';
    return `${translate}(${-index * 100}%) translateZ(0)`;
}