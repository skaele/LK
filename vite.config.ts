import react from '@vitejs/plugin-react'
import { babel } from '@rollup/plugin-babel'
import { defineConfig, Plugin, splitVendorChunkPlugin } from 'vite'
import checker from 'vite-plugin-checker'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'
import { version } from './package.json'
import path from 'path'
import fs from 'fs'

export default defineConfig((conf) => {
    return {
        server: {
            open: true,
            port: 3000,
            hmr: false,
            proxy: {
                '/api': {
                    target: 'https://e.mospolytech.ru/old/lk_api.php',
                    secure: false,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ''),
                },
            },
        },
        esbuild: {
            // jsxInject: (str: string) => (!str.includes('import React') ? "import React from 'react'" : ''),
            logOverride: { 'this-is-undefined-in-esm': 'silent' },
        },
        preview: { port: 3000 },
        plugins: [
            babel({
                presets: [
                    '@babel/typescript',
                    '@babel/react',
                    'patronum/babel-preset',
                    [
                        '@babel/preset-env',
                        {
                            targets: {
                                node: 14,
                            },
                            useBuiltIns: 'usage',
                            corejs: 3,
                        },
                    ],
                ],
                plugins: [['effector/babel-plugin', { factories: [] }]],
                extensions: ['.ts', '.tsx'],
                babelHelpers: 'bundled',
                targets: '>0.25%, iOS>= 13, last 2 versions, not dead',
            }),
            react({
                babel: {
                    plugins: [
                        [
                            'babel-plugin-styled-components',
                            {
                                displayName: process.env.NODE_ENV === 'development',
                                fileName: false,
                            },
                        ],
                    ],
                },
            }),
            tsconfigPaths(),
            svgr(),
            splitVendorChunkPlugin(),
            checker({ typescript: true, eslint: { lintCommand: 'eslint "./src/**/*.{ts,tsx}"' } }),
            reactVirtualized(),
        ],
        build: {
            outDir: 'build',
            manifest: true,
            target: 'es2015',
        },
        optimizeDeps: {
            include: ['effector'],
        },
        define: {
            'import.meta.env.VITE_APP_VERSION': JSON.stringify(version),
        },
    }
})

const WRONG_CODE = `import { bpfrpt_proptype_WindowScroller } from "../WindowScroller.js";`
export function reactVirtualized(): Plugin {
    return {
        name: 'flat:react-virtualized',
        // Note: we cannot use the `transform` hook here
        //       because libraries are pre-bundled in vite directly,
        //       plugins aren't able to hack that step currently.
        //       so instead we manually edit the file in node_modules.
        //       all we need is to find the timing before pre-bundling.
        configResolved() {
            const file = require
                .resolve('react-virtualized')
                .replace(
                    path.join('dist', 'commonjs', 'index.js'),
                    path.join('dist', 'es', 'WindowScroller', 'utils', 'onScroll.js'),
                )
            const code = fs.readFileSync(file, 'utf-8')
            const modified = code.replace(WRONG_CODE, '')
            fs.writeFileSync(file, modified)
        },
    }
}
