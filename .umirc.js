/**
 * @FileName .umirc.js
 * @Description umi 文档配置
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/21 14:02:57
 */

import { defineConfig } from 'dumi';

const config = defineConfig({
  title: 'Nuwa',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  styles: [ `html { font-size: 13px; }` ],
  navs: [
    null,
    { title: 'GitHub', path: 'https://github.com/nuwa-design' },
    { title: '更新日志', path: 'https://github.com/nuwa-design/nuwa-design/releases' },
  ],
});

export default config;
