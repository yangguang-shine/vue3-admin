export interface MenuItemI {
    title: string,
    name: string,
    icon: any,
    children?: MenuItemI[],
    clickFun?: () => any
}

export interface RouterItemI {
    name: string,
    title: string,
    children?: RouterItemI[],
}