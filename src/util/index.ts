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

export function setPxStyle(el: HTMLElement, value: number | string, vertical: boolean = false) {
    value = vertical ? `0px, ${value}px, 0px` : `${value}px, 0px, 0px`;
    setTransform(el.style, `translate3d(${value})`);
}

export function setTransform(style: any, v: any) {
    style.transform = v;
    style.webkitTransform = v;
    style.mozTransform = v;
}