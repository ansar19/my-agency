// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: '"ЭкоМарин Казахстан"',
    siteDescription: 'Управление эмиссиями производственных предприятий.',

    plugins: [
        {
            // Create posts from markdown files
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Post',
                path: 'blog/posts/*.md',
                route: '/blog/:slug',
            }
        },
        {
            use: '@zefman/gridsome-source-instagram',
            options: {
                username: 'ecomarinekz', // Instagram username
                typeName: 'InstagramPhoto' // The GraphQL type you want the photos to be added under. Defaults to InstagramPhoto
            }
        },
        {
            use: '@gridsome/plugin-google-analytics',
            options: {
                id: 'UA-91187323-1'
            }
        },
        {
            use: 'gridsome-plugin-yandex-metrika',
            options: {
                id: 61598815
            }
        },
        {
            use: '@gridsome/plugin-sitemap',
            options: {
                cacheTime: 600000, // default
                // exclude: ['/exclude-me'],
                config: {
                    '/blog/*': {
                        changefreq: 'weekly',
                        priority: 0.5
                    },
                    '/about': {
                        changefreq: 'monthly',
                        priority: 0.7
                    },
                    '/portfolio': {
                        changefreq: 'monthly',
                        priority: 0.7
                    },
                    '/environmental': {
                        changefreq: 'monthly',
                        priority: 0.7
                    },
                    '/engineering': {
                        changefreq: 'monthly',
                        priority: 0.7
                    },
                    '/sustainability': {
                        changefreq: 'monthly',
                        priority: 0.7
                    },
                    '/trainings': {
                        changefreq: 'monthly',
                        priority: 0.7
                    },
                    '/audit': {
                        changefreq: 'monthly',
                        priority: 0.7
                    },
                    '/safety': {
                        changefreq: 'monthly',
                        priority: 0.7
                    },
                    'contact': {
                        changefreq: 'monthly',
                        priority: 0.7
                    }

                }
            }
        }
    ],

    transformers: {
        //Add markdown support to all file-system sources
        remark: {
            externalLinksTarget: '_blank',
            externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
            anchorClassName: 'icon icon-link',
            plugins: [
                '@gridsome/remark-prismjs'
            ]
        }
    },
}