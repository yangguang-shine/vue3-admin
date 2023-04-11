export interface MenuItemI {
    title: string,
    name: string,
    icon: any,
    children?: MenuItemI[],
    clickFun?: () => any
}