// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import global styles
require('~/fonts.css')
require('~/main.css')

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, {router, head, isClient}) {
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)

    head.meta.push({
        key: 'og:title',
        name: 'og:title',
        content: `České Budějovice 2021 | DOM ZUŠ Tachov`,
    })

    head.meta.push({
        key: 'twitter:title',
        name: 'twitter:title',
        content: `České Budějovice 2021 | DOM ZUŠ Tachov`,
    })

    head.meta.push({
        key: 'og:description',
        name: 'og:description',
        content: `Informace k soustředění v Českých Budějovicích`,
    })

    head.meta.push({
        key: 'twitter:description',
        name: 'twitter:description',
        content: `Informace k soustředění v Českých Budějovicích`,
    })

    router.beforeEach((to, _from, next) => {
        head.meta.push({
            key: 'og:url',
            name: 'og:url',
            content: process.env.GRIDSOME_BASE_PATH + to.path,
        })
        next()
    })

}
