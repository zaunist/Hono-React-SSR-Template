import devServer from '@hono/vite-dev-server'
import preserveDirectives from 'rollup-preserve-directives'
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig(({ mode }) => {
  return {
    envDir: process.cwd(),
    plugins: [
      preserveDirectives(),
      mode !== 'client' && devServer({
        entry: 'src/index.tsx'
      }),
    ].filter(Boolean),
    ssr: {
      external: ['react', 'react-dom'],
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: mode === 'client' ? {
      manifest: true,
      assetsDir: 'static',
      rollupOptions: {
        input: './src/client.tsx',
        output: {
          entryFileNames: 'static/client-[hash].js',
          manualChunks: {
            vendor: [
              'react',
              'react-dom',
              '@date-fns/utc',
              '@radix-ui/react-label',
              '@radix-ui/react-select',
              '@radix-ui/react-slot',
              'axios',
              'class-variance-authority',
              'clsx',
              'lucide-react',
              'next-themes',
              'react-share',
              'remarkable',
              'sonner',
              'tailwind-merge',
              'tailwindcss-animate',
            ]
          }
        },
      },
    } : undefined
  }
})
