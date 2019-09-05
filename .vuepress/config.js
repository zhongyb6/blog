module.exports = {
    title: '前端基础',
    base: '/blog/',
    themeConfig: {
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: 'JavaScript',
                link: '/javascript/'
            },
            {
                text: 'css',
                link: '/css/'
            },
            {
                text: 'vue',
                link: '/vue/'
            },
            {
                text: 'react',
                link: '/react/'
            },
            {
                text: 'Github',
                link: 'https://github.com/liguirong720/blog.git'
            }
        ],
        sidebar: [{
                title: 'JavaScript',
                collapsable: false,
                children: [
                    '/javascript/',
                    '/javascript/bind实现',
                ]
            },
            {
                title: 'css',
                collapsable: false,
                children: [
                    '/css/'
                ]
            },
            {
                title: 'vue',
                collapsable: false,
                children: [
                    '/vue/'
                ]
            },
            {
                title: 'react',
                collapsable: false,
                children: [
                    '/react/'
                ]
            }
        ]
    }
}