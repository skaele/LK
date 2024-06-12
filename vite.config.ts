import react from '@vitejs/plugin-react';
import { babel } from '@rollup/plugin-babel';
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import checker from 'vite-plugin-checker'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig((conf) => {
    return {
        server: {
            open: true,
            port: 3000,
            hmr: false,
        },
        esbuild: {
            // jsxInject: (str: string) => (!str.includes('import React') ? "import React from 'react'" : ''),
            logOverride: { 'this-is-undefined-in-esm': 'silent' },
        },
        preview: { port: 3000 },
        plugins: [
            babel({ extensions: ['.ts', '.tsx'], babelHelpers: 'bundled' }),
            react(),
            tsconfigPaths(),
            svgr(),
            splitVendorChunkPlugin(),
            checker({ typescript: true, eslint: { lintCommand: 'eslint "./src/**/*.{ts,tsx}"' } }),
        ],
        build: {
            outDir: 'build',
            manifest: true,
        },
        optimizeDeps: {
            include: ['effector'],
        },
    }
})
