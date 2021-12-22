---
title: 常见问题
order: 3
toc: menu
nav:
 title: 指南
 order: 1
---

# 常见问题

您在一个特定的问题上停滞不前吗？ 您可以先在常见 FAQ（问题解答）中检索一下常见问题。

如果仍然找不到所需的内容，您可以参考我们的 [支持页面](https://nuwa.design/guide/support) 。

## 我该如何支持 Nuwa Design？

众人拾柴火焰高，您可以通过以下方法支持 Nuwa Design：

- **口口相传**。您可以在您管理的网站上设置 **友情链接** 至 `https://nuwa.design` . 在 [知乎](https://www.zhihu.com/column/c_1053693077834862592) 上关注我们 ，点赞并转发一些重要的文章。 或者只是与您的朋友 **谈论** 我们。
- **给我们反馈** 。 告诉我们一些做得好的地方或者可以改进的地方。 请给您最希望看到能够解决的问题投票（👍）。
- **帮助新的用户** 。 您可以在 [StackOverflow](https://stackoverflow.com/questions/tagged/nuwa-design?tab=Newest) 社区帮助一些遇到困难的朋友。
- **做出一些改变** 。
    - 编辑文档。 每个页面左下角都有一个 “Edit this doc on GitHub” 的链接。
    - 通过 [创建 Issue](https://github.com/nuwa-design/nuwa-design/issues/new) 来报告错误或缺少的功能。
    - 查看和评论一些现有的 [Pull Requests](https://github.com/nuwa-design/nuwa-design/pulls) 和 [Issues](https://github.com/nuwa-design/nuwa-design/issues) 。
    - 通过 Fork 项目来改进功能或者修复 BUG。
    
## 为什么我的组件没有正确地渲染？

发生这种情况的首要原因，很有可能是您的代码在项目中出现了类名冲突。Nuwa Design 所有组件的类名均采用规范的 `前缀_组件名-功能描述` 来命名，您也可以通过 [ClassName Generator](https://nuwa-design/classNameGenerator) 来配置自定义类名规则。

您可以排查项目中是否存在如下问题：

- 避免在组件库外的任何位置通过类名 **覆盖** 的方式重新设置样式规则，
- 避免引用多个[ClassName Generator](https://nuwa-design/classNameGenerator) 配置自定义类名规则。
- 按需加载配置存在错误，详情请查阅 [Webpack](https://webpack.docschina.org/) 相关文档。

