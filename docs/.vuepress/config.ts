import {defaultTheme, defineUserConfig} from 'vuepress'
import {searchPlugin} from '@vuepress/plugin-search'

export default defineUserConfig({
    // 站点配置
    base: '/', // 部署站点的基础路径。
    lang: 'zh-CN', // 站点的语言。
    title: 'JX3DEV - 开发文档', // 站点的标题。
    description: '孤锋立影，锋芒在望！《剑网3》十三周年庆典狂欢！全新门派“刀宗”正式曝光，全新等级、震撼剧情及诸多新奇玩法与你相约年度资料片！', // 站点的描述。
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}]
    ], // 在最终渲染出的 HTML 的 <head> 标签内加入的额外标签。
    // 通用配置项
    debug: false, // 是否启用 Debug 模式。
    // 主题配置
    theme: defaultTheme({
        colorMode: 'auto', // 默认颜色模式。
        colorModeSwitch: true, // 是否启用切换颜色模式的功能。
        home: '/', // 首页的路径。
        navbar: [
            {text: 'Dev必读', children: ['/ErrorCode-ws.md', '/ErrorCode-http.md']},
            {text: 'Api接口', children: ['/Unlimited.md', '/APIinterface.md', '/Template.md']},
            {text: 'See更多', children: ['/Subscribe.md', '/Smsdirect.md', '/Demonstration.md', '/Customized.md']},
            {text: '常见问题', link: '/FAQ.md'},
            {text: '更新日志', link: '/LOG.md'},
            {text: '关于我们', link: '/About.md'}
        ], // 导航栏配置。
        logo: '/favicon.ico', // Logo 图片的 URL。
        logoDark: '/favicon.ico', // 在夜间模式中使用的 Logo 图片的 URL。
        repo: 'YiwanGi/jx3dev-docs', // 项目仓库的 URL。
        repoLabel: 'Github', // 项目仓库的标签。
        //sidebar: {}, // 侧边栏配置。
        sidebarDepth: 2, // 设置根据页面标题自动生成的侧边栏的最大深度。
        editLink: true, // 是否启用 编辑此页 链接。
        editLinkText: '编辑此页', // 编辑此页 链接的文字。
        editLinkPattern: ':repo/edit/:branch/:path', // 编辑此页 链接的 Pattern 。
        docsRepo: 'YiwanGi/jx3dev-docs', // 文档源文件的仓库 URL 。
        docsBranch: 'main', // 文档源文件的仓库分支。
        docsDir: 'docs', // 文档源文件存放在仓库中的目录名。
        lastUpdated: true, // 是否启用 最近更新时间戳 。
        lastUpdatedText: '上一次编辑', // 最近更新时间戳 标签的文字。
        contributors: true, // 是否启用 贡献者列表 。
        contributorsText: '贡献者列表', // 贡献者列表 标签的文字。
        tip: '提示',
        warning: '注意',
        danger: '警告',
        notFound: ['Not Found'], // 404 页面的提示信息。
        backToHome: '返回首页', // 404 页面中 返回首页 链接的文字。
        openInNewWindow: '在新窗口中打开', // ExternalLinkIcon. 链接内的 sr-only 文字
        toggleColorMode: '切换颜色模式', // 切换颜色模式按钮的标题文字。
        toggleSidebar: '切换侧边栏' // 切换侧边栏按钮的标题文字。
    }),
    // Dev 配置项
    host: '0.0.0.0', // 指定开发服务器的主机名。
    port: 8080, // 指定开发服务器的端口号。
    open: false, // 是否在开发服务器启动后打开浏览器。
    //templateDev: '@vuepress/client/templates/dev.html', // 指定开发时使用的 HTML 模板。
    // 插件配置
    plugins: [searchPlugin()] // 要使用的插件。
})
