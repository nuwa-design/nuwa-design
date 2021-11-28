---
title: Grid 栅格
nav:
 path: /components
 title: 组件
 order: 1
group:
 path: /layout
 title: 布局
 order: 3
---

## Grid 栅格

标准化的文字排列格式。

### 使用场景



### 设计理念


### 使用示例

#### 基础栅格

```tsx
/**
 * title: 基础栅格
 * description: 我们预设了一组表达文字粗细的属性值，您可以使用 `regular`、`bold`、`bolder`、`boldest` 来设置文字粗细。
 * hideActions: '["CSB"]'
 */
import React from "react";
import { Grid } from 'nuwa-design';

export default () => <>
 <Grid.Row>
   <Grid.Col range={{lg: 2, md: 5, sm: 7, xs: 9}} offset={{lg: 1, md: 1, sm: 1, xs: 1}} push={{ lg: 3}}>This is Col1</Grid.Col>
   <Grid.Col range={{lg: 7, md: 5, sm: 3, xs: 1}} offset={{lg: 1, md: 1, sm: 1, xs: 1}} push={{ lg: 6 }} >This is Col2</Grid.Col>
 </Grid.Row>
</>;
```
