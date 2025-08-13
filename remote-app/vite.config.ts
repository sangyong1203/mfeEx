import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'remote_app', // Remote 이름
      filename: 'remoteEntry.js', // 빌드 결과 파일
      exposes: {
        './RemoteButton': './src/components/RemoteButton.vue'
      },
      shared: ['vue']
    })
  ],
  build: {
    target: 'esnext',
    modulePreload: false,
    cssCodeSplit: false
  }
})

