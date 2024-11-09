import vue from '@vitejs/plugin-vue'
import path from 'path'
import UnoCSS from 'unocss/vite'
import { UserConfig, defineConfig, loadEnv } from 'vite'
// import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig(({ mode }): UserConfig => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME

  return {
    plugins: [
      vue({
        script: {
          defineModel: true,
        },
      }),
      UnoCSS(),
    ],

    define: {
      'import.meta.env.PACKAGE_VERSION': JSON.stringify(process.env.npm_package_version),
    },

    server: {
      host: process.env.VITE_SERVER_HOST ?? 'movi.api.ekoadiguna.test',
      port: Number(process.env.VITE_SERVER_PORT ?? 3030),
      https: process.env.VITE_SERVER_HTTPS_CERT ? {
        cert: process.env.VITE_SERVER_HTTPS_CERT,
        key: process.env.VITE_SERVER_HTTPS_KEY,
        ciphers: process.env.VITE_SERVER_HTTPS_CIPHERS,
      } : undefined,
    },

    build: {
      sourcemap: true,
      outDir: 'dist/' + process.env.npm_package_version,
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})