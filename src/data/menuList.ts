export declare interface Menu {
    id: string,
    icon?: string,
    path?: string,
    name?: string,
    componentPath?: string,
    title: string,
    children?: Array<Menu>,
}

export const menuList1 = [
    {
        id: "M0001",
        icon: "md-home",
        path: "/home",
        name: "home",
        componentPath: "home.vue",
        title: "系统首页",
    },
    {
        id: "M0002",
        icon: "md-grid",
        path: "/table",
        name: "table",
        componentPath: "table.vue",
        title: "基础表格",
    },
    {
        id: "M0003",
        icon: "md-bookmark",
        path: "/tabs",
        name: "tabs",
        componentPath: "tabs.vue",
        title: "tab选项卡",
    },
    {
        id: "M0004",
        icon: "ios-list-box",
        title: "表单相关",
        children: [
            {
                id: "M0005",
                path: "/form",
                name: "form",
                componentPath: "form.vue",
                title: "基本表单",
            },
            {
                id: "M0006",
                path: "/upload",
                name: "upload",
                componentPath: "upload.vue",
                title: "文件上传",
            },
            {
                id: "M0007",
                title: "三级菜单",
                children: [
                    {
                        id: "M0008",
                        path: "/editor",
                        name: "editor",
                        componentPath: "editor.vue",
                        title: "富文本编辑器",
                    },
                ],
            },
        ],
    },    
    {
        id: "M0091",
        icon: "md-information-circle",
        path: "/message",
        name: "message",
        componentPath: "message.vue",
        title: "消息弹窗",
    },
    {
        id: "M0009",
        icon: "md-color-palette",
        path: "/icon",
        name: "icon",
        componentPath: "icon.vue",
        title: "自定义图标",
    },
    {
        id: "M0010",
        icon: "ios-speedometer",
        path: "/charts",
        name: "charts",
        componentPath: "charts.vue",
        title: "echarts图表",
    },
    {
        id: "M0020",
        icon: "md-git-compare",
        path: "/bpmn",
        name: "bpmn",
        componentPath: "bpmn.vue",
        title: "流程图",
    },
    {
        id: "M0011",
        icon: "md-planet",
        path: "/i18n",
        name: "i18n",
        componentPath: "i18n.vue",
        title: "国际化功能",
    },    
    {
        id: "M0016",
        icon: "md-cog",
        path: "/env",
        name: "env",
        componentPath: "env.vue",
        title: "环境变量",
    },
    {
        id: "M0012",
        icon: "md-warning",
        title: "权限处理",
        children: [
            {
                id: "M0013",
                path: "/permission",
                name: "permission",
                componentPath: "permission.vue",
                title: "权限测试",
            },
            {
                id: "M0014",
                path: "/404",
                name: "404",
                componentPath: "error404.vue",
                title: "404页面",
            },
        ],
    },
    {
        id: "M0015",
        icon: "md-thumbs-up",
        path: "/donate",
        name: "donate",
        componentPath: "donate.vue",
        title: "支持作者",
    },
];

export const menuList2 = [
    {
        id: "M0001",
        icon: "md-home",
        path: "/home",
        name: "home",
        componentPath: "home.vue",
        title: "系统首页",
    },
    {
        id: "M0012",
        icon: "md-warning",
        title: "权限处理",
        children: [
            {
                id: "M0013",
                path: "/permission",
                name: "permission",
                componentPath: "permission.vue",
                title: "权限测试",
            },
            {
                id: "M0014",
                path: "/404",
                name: "404",
                componentPath: "error404.vue",
                title: "404页面",
            },
        ],
    },
    {
        id: "M0015",
        icon: "md-thumbs-up",
        path: "/donate",
        name: "donate",
        componentPath: "donate.vue",
        title: "支持作者",
    },
];
