import react from '@vitejs/plugin-react'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import checker from 'vite-plugin-checker'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig((conf) => {
    return {
        server: {
            open: true,
            port: 3000,
        },
        esbuild: {
            // jsxInject: (str: string) => (!str.includes('import React') ? "import React from 'react'" : ''),
            logOverride: { 'this-is-undefined-in-esm': 'silent' },
        },
        preview: { port: 3000 },
        plugins: [
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
        ],
        build: {
            outDir: 'build',
            manifest: true,
        },
    }
})
