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

响应式布局的栅格可适应屏幕大小和方向，确保布局在不同尺寸之间的一致性。

### 使用场景

栅格能确保不同布局间的视觉层面的舒适感，同时在众多不同设计中保持灵活性。 我们基于 `24` 列的网格布局来做到 `UI` 的响应式。

### 设计理念

布局的栅格化系统，我们是基于行（`Row`）和列（`Col`）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：

* 通过 `Row` 在水平方向建立一组 `column`（简写 `col`）。 
* 你的内容应当放置于 `Col` 内，并且，只有 `Col` 可以作为 `Row` 的直接元素。
* 栅格系统中的列是指 `1` 到 `24` 的值来表示其跨越的范围。例如，三个等宽的列可以使用 `<Col range={8} />` 来创建。
* 如果一个 `Row` 中的 `Col` 总和超过 `24`，那么多余的 `Col` 会作为一个整体另起一行排列。

### 功能示例

#### 基础分栏

```tsx
/**
 * title: 基础分栏
 * description: 使用单一的一组 `Row` 和 `Col` 栅格组件，就可以创建一个基本的栅格系统，所有列（`Col`）必须放在 `Row` 内。
 * hideActions: '["CSB"]'
 */
import React from "react";
import { Grid } from 'nuwa-design';
import Container from './demo/Container';

export default () => <>
 <Grid.Row>
  <Grid.Col className="bg-purple-dark" range={24}>
   <Container bgColor="dark">
    COL-24
   </Container>
  </Grid.Col>
 </Grid.Row>
 
 <Grid.Row>
  <Grid.Col className="bg-purple-dark" range={12}>
   <Container bgColor="dark">
    COL-12
   </Container>
  </Grid.Col>
  <Grid.Col className="bg-purple-light" range={12}>
   <Container bgColor="light">
    COL-12
   </Container>
  </Grid.Col>
 </Grid.Row>
 
 <Grid.Row>
  <Grid.Col className="bg-purple-dark" range={6}>
   <Container bgColor="dark">COL-6</Container>
  </Grid.Col>
  <Grid.Col className="bg-purple-light" range={6}>
   <Container bgColor="light">COL-6</Container>
  </Grid.Col>
  <Grid.Col className="bg-purple-dark" range={6}>
   <Container bgColor="dark">COL-6</Container>
  </Grid.Col>
  <Grid.Col className="bg-purple-light" range={6}>
   <Container bgColor="light">COL-6</Container>
  </Grid.Col>
 </Grid.Row>

 <Grid.Row>
  <Grid.Col className="bg-purple-dark" range={3}>
   <Container bgColor="dark">COL-3</Container>
  </Grid.Col>
  <Grid.Col className="bg-purple-light" range={3}>
   <Container bgColor="light">COL-3</Container>
  </Grid.Col>
  <Grid.Col className="bg-purple-dark" range={3}>
   <Container bgColor="dark">COL-3</Container>
  </Grid.Col>
  <Grid.Col className="bg-purple-light" range={3}>
   <Container bgColor="light">COL-3</Container>
  </Grid.Col>
  <Grid.Col className="bg-purple-dark" range={3}>
   <Container bgColor="dark">COL-3</Container>
  </Grid.Col>
  <Grid.Col className="bg-purple-light" range={3}>
   <Container bgColor="light">COL-3</Container>
  </Grid.Col>
  <Grid.Col className="bg-purple-dark" range={3}>
   <Container bgColor="dark">COL-3</Container>
  </Grid.Col>
  <Grid.Col className="bg-purple-light" range={3}>
   <Container bgColor="light">COL-3</Container>
  </Grid.Col>
 </Grid.Row>
</>;
```

#### 分栏偏移

```tsx
/**
 * title: 分栏偏移
 * description: 使用 `offset` 可以将列向右侧偏。例如，`offset={4}` 表示将元素向右侧偏移了 4 个列（`column`）的宽度。
 * hideActions: '["CSB"]'
 */
import React from "react";
import { Grid } from 'nuwa-design';
import Container from './demo/Container';

export default () => <>
 <Grid.Row>
  <Grid.Col className="bg-purple-dark" range={12} offset={2}>
   <Container bgColor="dark">
    COL-22 OFFSET-2
   </Container>
  </Grid.Col>
 </Grid.Row>
 
 <Grid.Row>
  <Grid.Col className="bg-purple-dark" range={10} offset={2}>
   <Container bgColor="dark">
    COL-10 OFFSET-2
   </Container>
  </Grid.Col>
  <Grid.Col className="bg-purple-light" range={9} offset={3}>
   <Container bgColor="light">
    COL-9 OFFSET-3
   </Container>
  </Grid.Col>
 </Grid.Row>
 
 <Grid.Row>
  <Grid.Col className="bg-purple-dark" range={3} offset={3}>
   <Container bgColor="dark">COL-3 OFFSET-3</Container>
  </Grid.Col>
  <Grid.Col className="bg-purple-light" range={3} offset={3}>
   <Container bgColor="light">COL-3 OFFSET-3</Container>
  </Grid.Col>
  <Grid.Col className="bg-purple-dark" range={3} offset={3}>
   <Container bgColor="dark">COL-3 OFFSET-3</Container>
  </Grid.Col>
  <Grid.Col className="bg-purple-light" range={3} offset={3}>
   <Container bgColor="light">COL-3 OFFSET-3</Container>
  </Grid.Col>
 </Grid.Row>
</>;
```

#### 栅格排序

```tsx
/**
 * title: 栅格排序
 * description: 通过使用 `push` 和 `pull` 属性可以很容易的改变列（`column`）的顺序。
 * hideActions: '["CSB"]'
 */
import React from "react";
import { Grid } from 'nuwa-design';
import Container from './demo/Container';

export default () => <>
 <Grid.Row>
  <Grid.Col range={18} push={6}>
   <Container bgColor="light">
    COL-18 PUSH-6
   </Container>
  </Grid.Col>
  <Grid.Col range={6} pull={18}>
   <Container bgColor="dark">
    COL-6 PULL-18
   </Container>
  </Grid.Col>
 </Grid.Row>
</>;
```

#### 响应式

```tsx
/**
 * title: 响应式
 * description: 参照了 `Bootstrap` 的 **响应式设计**，预设了四个响应尺寸：`xs`、`sm`、`md`、`lg`、`xl`、`xxl`。每种尺寸均可设置 `range`、`offset`、`pull`、`push`。
 * hideActions: '["CSB"]'
 */
import React from 'react';
import { Grid } from 'nuwa-design';
import Container from './demo/Container';

export default () => <>
 <Grid.Row>
  <Grid.Col className="bg-purple-dark" range={12}>
   <Container bgColor="dark">
    COL-12
   </Container>
  </Grid.Col>
  <Grid.Col className="bg-purple-light" range={12}>
   <Container bgColor="light">
    COL-12
   </Container>
  </Grid.Col>
 </Grid.Row>
 
 
 <Grid.Row>
  <Grid.Col range={{ xxl: 12, xl: 10, lg: 8, md: 6 }}>
   <Container bgColor="light">
    COL-XXL-12 COL-XL-10 COL-LG-8 COL-MD-6
   </Container>
  </Grid.Col>
  <Grid.Col range={{ xxl: 12, xl: 14, lg: 16, md: 18 }}>
   <Container bgColor="dark">
    COL-XXL-12 COL-XL-14 COL-LG-16 COL-MD-18
   </Container>
  </Grid.Col>
 </Grid.Row>
</>;
```

<Alert type="info">
  Tips: 尝试缩放您的浏览器，即可看到响应式效果！
</Alert>



#### 隐藏分栏

```tsx
/**
 * title: 响应式
 * description: 在不同分辨率设备上，可能需要展示对应的模块，可以使用 `hidden` 隐藏不必要展示的模块。
 * hideActions: '["CSB"]'
 */
import React from 'react';
import { Grid } from 'nuwa-design';
import Container from './demo/Container';

export default () => <>
 <Grid.Row>
  <Grid.Col className="bg-purple-dark" range={6} hidden={['xxl']}>
   <Container bgColor="dark">
    COL-6 HIDDEN-WHEN-XXL
   </Container>
  </Grid.Col>
  <Grid.Col className="bg-purple-light" range={6} hidden={['xl']}>
   <Container bgColor="light">
    COL-6 HIDDEN-WHEN-XL
   </Container>
  </Grid.Col>
   <Grid.Col className="bg-purple-dark" range={6} hidden={['lg']}>
     <Container bgColor="dark">
       COL-6 HIDDEN-WHEN-LG
     </Container>
   </Grid.Col>
   <Grid.Col className="bg-purple-light" range={6} hidden={['md']}>
     <Container bgColor="light">
       COL-6 HIDDEN-WHEN-MD
     </Container>
   </Grid.Col>
 </Grid.Row>
</>;
```

<Alert type="info">
  Tips: 尝试缩放您的浏览器，即可看到响应式效果！
</Alert>

<API src="./col.tsx"></API>
