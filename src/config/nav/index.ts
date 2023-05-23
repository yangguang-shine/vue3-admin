import { ObjectI } from '@/interface/index';
import { NavItemI } from '@/interface/nav';
import people from "./people";
import house from "./house";
export const navList: NavItemI[] = [people, house];
const pathInfo: ObjectI = {}
navList.forEach(navItem => {
    navItem.menuList.forEach(menuItem => {
        menuItem.children.forEach(childItem => {
            pathInfo[`/${childItem.name}`] = childItem.name
            if (childItem.deepChildren) {
                childItem.deepChildren.forEach(item => {
                pathInfo[`/${item.name}`] = childItem.name
                })
            }
            
        })
    })
})
console.log("pathInfo");
console.log(pathInfo);
