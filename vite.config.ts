import { defineConfig } from 'vite';

export default defineConfig({
    // * Repo name
    base: '/FieldNotes/',
    
    // * Project Constant Variables
    define: {
        kWebsiteVersion: JSON.stringify('0.0.1')
    },

    // * Path resolution & valid files to parse with
    resolve: {
        alias: {
            '@': '/src',
            '@components': '/src/components',
            '@styles': '/src/styles',
            '@assets': '/src/assets'
        },
        extensions: ['.ts', '.json', '.css', '.scss']
    },

    // * Build config
    build: {
        target: 'es2020',
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: true,
        minify: 'esbuild',
        rollupOptions: {
            input: './index.html'
        }
    },

    // * Server config
    server: {
        port: 42069,
        open: true,
        strictPort: true
    }
});