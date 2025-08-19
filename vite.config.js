// vite.config.js

export default ({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: './index.html'
      },
      output: {
        assetFileNames: 'threejs/assets/[name]-[hash][extname]',
        chunkFileNames: 'threejs/[name]-[hash].js',
        entryFileNames: 'threejs/assets/[name]-[hash].js'
      }
    }
  }
})
