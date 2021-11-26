import { defineConfig } from 'dumi';

const config = defineConfig({
  title: 'Nuwa',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  styles: [ `html { font-size: 13px; }`, `body { color: #646c9a }`,`a { text-decoration: none }` ],
  navs: [
    null,
    { title: 'GitHub', path: 'https://github.com/nuwa-design' },
    { title: '更新日志', path: 'https://github.com/nuwa-design/nuwa-design/releases' },
  ],
});

export default config;
