import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    // Dev server — load the dev playground app
    return {
      plugins: [vue()],
      resolve: {
        alias: { '@': resolve(__dirname, 'src') }
      }
    }
  }

  // Library build
  return {
    plugins: [
      vue(),
      dts({
        insertTypesEntry: true,
        include: ['src'],
        exclude: ['src/dev']
      })
    ],
    resolve: {
      alias: { '@': resolve(__dirname, 'src') }
    },
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'spvToolpack',
        formats: ['es', 'umd'],
        fileName: (format) => `spv-toolpack.${format}.js`
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: { vue: 'Vue' },
          exports: 'named'
        }
      }
    }
  }
})
