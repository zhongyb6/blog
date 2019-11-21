module.exports = {
    title: '鬼掠凹',
    description: '每天惊吓一点点',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    base: '/blog/',
    themeConfig: {
        logo: '/logo.png',
        lastUpdated: 'lastUpdate',
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: 'JavaScript',
                link: '/javascript/'
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
                    '/javascript/apply，call与bind简单实现',
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