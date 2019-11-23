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
                text: 'Vue',
                link: '/vue/'
            },
            {
                text: 'React',
                link: '/react/'
            },
            {
                text: 'node',
                link: '/node/'
            },
            {
                text: 'Webpack',
                link: '/webpack/'
            },
            {
                text: '小程序',
                link: '/wxapp/'
            },
            {
                text: 'Github',
                link: 'https://github.com/liguirong720/blog.git'
            }
        ],
        sidebar: [
            {
                title: 'JavaScript',
                collapsable: false,
                children: [
                    '/javascript/',
                ]
            },
            {
                title: 'Vue',
                collapsable: false,
                children: [
                    '/vue/'
                ]
            },
            {
                title: 'React',
                collapsable: false,
                children: [
                    '/react/'
                ]
            },
            {
                title: 'node',
                collapsable: false,
                children: [
                    '/node/'
                ]
            },
            {
                title: 'Webpack',
                collapsable: false,
                children: [
                    '/webpack/'
                ]
            },
            {
                title: '小程序',
                collapsable: false,
                children: [
                    '/wxapp/'
                ]
            }
        ]
    }
}