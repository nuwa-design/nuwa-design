/**
 * @FileName lint-staged.config.js
 * @Description 配置 lint-staged 规则
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/20 12:21:28
 */

module.exports = {
  'src/**/*.{less,css,md,html}': [ 'prettier --write' ],
  'src/**/*.{js,jsx}': (fileNames) => {
    const fileStr = fileNames.join(' ');
    return [
      `prettier --write ${ fileStr }`,
      fileNames.length > 30 ? 'yarn lint-staged:js src/' : `yarn lint-staged:js ${ fileStr }`,
    ];
  },
  'src/**/*.{ts,tsx}': (fileNames) => {
    return fileNames.length > 30
      ? 'yarn lint-staged:ts src/'
      : `yarn lint-staged:ts ${ fileNames.join(' ') }`;
  },
  '**/*.{ts,tsx}': () => 'yarn check:tsc', // 函数的方式用来避免，传递过来的 fileNamse 进入 tsc 的类型检查中
};

