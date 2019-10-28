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