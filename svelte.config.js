import {scss, sass, postcss, globalStyle} from 'svelte-preprocess'
// import node from '@sveltejs/adapter-node';
import adapter from '@sveltejs/adapter-static';


// import legacy from '@vitejs/plugin-legacy'
// import {defineConfig} from "vite";


/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',
        // adapter: node({
        //         precompress: true
        //     }
        // ),
        adapter: adapter({
            // default options are shown
            pages: 'build',
            assets: 'build',
            fallback: null
        }),
        // vite: defineConfig({
        //     // build: {
        //     //     polyfillDynamicImport: true
        //     // },
        //     // plugins: [
        //     //     legacy({
        //     //         additionalLegacyPolyfills: ['vite/dynamic-import-polyfill']
        //     //     }),
        //     // ]
        // })

    },
    preprocess: [scss(), sass(), postcss(), globalStyle()]
};

export default config;
