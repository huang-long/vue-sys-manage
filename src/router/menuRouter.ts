import type { RouteRecordRaw } from 'vue-router'
import { menuList, type Menu } from '../data/menuList'
//引入所有views下.vue文件 
const modules = import.meta.glob("../views/**/**.vue")

const getChildRouter = (list: Array<any>, parentMenu: Array<String>) => {
  let routers: Array<RouteRecordRaw> = [];
  list.forEach(menu => {
    let tags: Array<String> = [...parentMenu, menu.title];
    if (menu.path) {
      let componentPath = "../views/" + menu.componentPath;
      routers.push({
        path: menu.path,
        name: menu.name,
        meta: {
          title: menu.title,
          tags: tags
        },
        component: modules[componentPath]
      });
    }
    if (menu.children && menu.children.length > 0) {
      routers = routers.concat(getChildRouter(menu.children, tags));
    }
  });
  return routers
}

const childRouter = getChildRouter(menuList, []);

export default childRouter
