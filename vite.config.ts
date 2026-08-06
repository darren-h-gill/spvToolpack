import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import { readFileSync, writeFileSync } from 'fs'

/**
 * Stamps docs/spv-toolpack.md into dist/ so the built package carries its own
 * documentation.
 *
 * Source links in the doc are written as {{RAW}}/... placeholders and resolved here
 * against the release tag for the version being built, so a consumer holding a bundle
 * can always fetch the exact source it came from. Tags are created at release time,
 * immediately after the build — until then the links point at a tag that does not
 * exist yet.
 */
function docsPlugin(): Plugin {
  return {
    name: 'spv-docs',
    apply: 'build',
    closeBundle() {
      const pkg = JSON.parse(readFileSync(resolve(__dirname, 'package.json'), 'utf-8'))
      const tag = `v${pkg.version}`
      const repo = String(pkg.repository?.url ?? '').replace(/\.git$/, '')
      const slug = repo.replace(/^https:\/\/github\.com\//, '')

      const tokens: Record<string, string> = {
        VERSION:    pkg.version,
        TAG:        tag,
        BUILD_DATE: new Date().toISOString().slice(0, 10),
        REPO:       repo,
        RAW:        `https://raw.githubusercontent.com/${slug}/${tag}`,
        CDN:        `https://cdn.jsdelivr.net/gh/${slug}@${tag}`,
      }

      let md = readFileSync(resolve(__dirname, 'docs/spv-toolpack.md'), 'utf-8')
      for (const [key, value] of Object.entries(tokens)) {
        md = md.split(`{{${key}}}`).join(value)
      }

      const unresolved = md.match(/\{\{[A-Z_]+\}\}/g)
      if (unresolved) {
        throw new Error(`docs: unresolved placeholders ${[...new Set(unresolved)].join(', ')}`)
      }

      writeFileSync(resolve(__dirname, 'dist/spv-toolpack.md'), md)
    }
  }
}

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
      }),
      docsPlugin()
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
