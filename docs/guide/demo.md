---
title: 快速上手 order: 1 toc: menu nav:
title: 指南 order: 1
---

# 快速上手

Nuwa Design 致力于提供给程序员愉悦的开发体验。

> 本指南默认开发者已掌握一定的 <a href="https://reactjs.org/">React</a> 和 <a href="http://www.ecmascript.org/">ES2015</a> 的开发经验，
> 并正确安装和配置了 <a href="https://nodejs.org/">Node.js</a> V15 或以上。

## 安装

### 使用 npm 或 yarn 安装

我们推荐使用 **npm** 或 **yarn** 的方式进行接入，包管理工具可以在开发和部署阶段提供诸多好处。

**NPM:**

``` shell
$ npm install nuwa-design -save
```

**YARN:**

``` shell
$ yarn add nuwa-design -save
```

如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm)。

### 浏览器引入

在浏览器中使用 `script` 和 `link` 标签直接引入文件，并使用全局变量 `Nuwa`。

访问位于 [Github](https://github.com/nuwa-design/nuwa-design) 上的项目仓库，在 `dist/umd`
目录中提供了未压缩版本（开发环境）的`nuwa-design.development.js[css]`和压缩版本（生产环境）的`nuwa-design.production.min.js[css]`文件。

``` html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title></title>
    <!-- 此处导入 Nuwa Design 样式文件 -->
    <link rel="stylesheet" href="paths/nuwa-design.production.min.css" type="text/css">
  </head>
  <body>
    <!-- 此处导入 Nuwa Design 脚本文件 -->
    <script type="text/javascript" src="paths/nuwa-design.production.min.js"></script>
  </body>
</html>
```

> 通过浏览器引用方式接入的项目，可以通过访问 `windows.Nuwa` 全局变量使用组件。

## 使用

可以通过 `import` 或 `require` 的方式使用组件库。

``` javascript
import { Button } from 'nuwa-design';

ReactDom.render(<Button />, mountNode);
```

### 按需加载

Nuwa Design 默认支持基于 [ECMAScript modules](https://webpack.js.org/guides/ecma-script-modules/)
的 [tree shaking](https://webpack.js.org/guides/tree-shaking/)，对于 javascript
部分，直接引入 `import { Button } from 'nuwa-design'` 就会有按需加载的效果。

如果开发者使用了 [babel](https://babeljs.io/) ，也可以配置 [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import)
实现按需加载，只需要在 **配置文件** 中进行如下设置：

``` json
// .babelrc or babel-loader option
{
  "plugins": [
    ["import", {
      "libraryName": "shined",
      "libraryDirectory": "src/components",
      "style": "css" 
    }]
  ]
}
```

### Typescript

Nuwa Design 使用 [TypeScript](https://www.tslang.cn/) 进行书写并提供了完整的定义文件。

## 自行构建

如果想自己维护工作流，我们推荐使用 [rollup](https://rollupjs.org/)) 进行构建和调试，可以使用 [React](https://reactjs.org/) 生态圈中的 **各种脚手架** 进行开发。
