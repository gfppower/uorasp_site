import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'uorasp',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  navs: {
    // The multi-language key value must be consistent with the key in the locales configuration
    'en-US': [
      null, // A null value means to retain the conventionally generated navigation and only do incremental configuration
      {
        title: 'Version Notice',
        children: [
          { title: 'Changelog', path: 'https://github.com/umijs/qiankun/releases' },
          { title: 'Upgrade Guide', path: '/cookbook#upgrade-from-1x-version-to-2x-version' },
          { title: '1.x Version', path: 'https://v1.qiankun.umijs.org/' },
        ],
      },
      { title: 'GitHub', path: 'https://github.com/umijs/qiankun' },
    ],
    'zh-CN': [
      null, // A null value means to retain the conventionally generated navigation and only do incremental configuration
      {
        title: '版本公告',
        children: [
          { title: '发布日志', path: 'https://github.com/umijs/qiankun/releases' },
          { title: '升级指南', path: '/zh/cookbook#从-1x-版本升级到-2x-版本' },
          { title: '1.x 版本', path: 'https://v1.qiankun.umijs.org/zh/' },
        ],
      },
      { title: 'GitHub', path: 'https://github.com/umijs/qiankun' },
    ],
  },

});
