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
    const translate = isVertical(tabBarPosition) ? `0px, ${-index * 100}%, ` : `${-index * 100}%, 0px`;
    return `translate3d(${translate}, 0px)`;
}

export function getPxStyle(value: number | string, unit = 'px', vertical: boolean = false) {
    value = vertical ? `0px, ${value}${unit}, 0px` : `${value}${unit}, 0px, 0px`;
    return `translate3d(${value})`;
}

export function setPxStyle(el: HTMLElement, value: number | string, unit = 'px', vertical: boolean = false) {
    setTransform(el.style, getPxStyle(value, unit, vertical));
}

export function setTransform(style: any, v: any) {
    style.transform = v;
    style.webkitTransform = v;
    style.mozTransform = v;
}

export const getOffset = (layout: HTMLDivElement) => {
    let offset = 0;
    const { style } = layout;
    if (style.transform) {
        const transform = style.transform;
        offset = +transform
            .replace('(', 'px')
            .replace('%', 'px')
            .split('px')[1] || 0;
        if (style.transform.indexOf('%') >= 0) {
            offset /= 100;
            offset *= layout.clientWidth;
        }
    }
    return offset;
}