---
title: Typography 排版
nav:
 path: /components
 title: 组件
 order: 1
group:
 path: /common
 title: 通用
 order: 1
---

## Typography 排版

标准化的文字排列格式。

### 使用场景

* 页面中的标题、核心内容的着重描述
* 大段的文章、文本内容的标准排版
* 特殊的文本类型（删除线、下划线、文字着色）
* 标签
* ...

### 设计理念

在设计 **排版组件** 时，我们有意识将其拆分为多个更细粒度的功能型组件，例如 文本类型（`Text`）、标题类型（`Title`）、链接类型（`Link`）等。

多个排版组件之间保持 **相同的配置参数** ，也会根据传入的参数不同，智能地转换成更合适的组件渲染。

### 文字

#### 粗细

```tsx
/**
 * title: 粗细
 * description: 我们预设了一组表达文字粗细的属性值，您可以使用 `regular`、`bold`、`bolder`、`boldest` 来设置文字粗细。
 *
 */
import React from "react";
import { Typography } from 'nuwa-design';

export default () => <>
 <Typography.Text weight="regular">Example text</Typography.Text><br /><br />
 <Typography.Text weight="bold">Example bold text</Typography.Text><br /><br />
 <Typography.Text weight="bolder">Example bolder text</Typography.Text><br /><br />
 <Typography.Text weight="boldest">Example boldest text</Typography.Text><br /><br />
</>;
```

#### 状态

```tsx
/**
 * title: 状态
 * description: 文字状态能向用户表达不同的含义，在不同业务场景设置与之对应的文字状态，可以显著提升用户体验。
 *
 */
import React from "react";
import { Typography } from 'nuwa-design';

export default () => <>
 <Typography.Text type="primary">Primary state  text</Typography.Text><br /><br />
 <Typography.Text type="success">Success state text</Typography.Text><br /><br />
 <Typography.Text type="danger">Danger state  text</Typography.Text><br /><br />
 <Typography.Text type="warning">Warning state  text</Typography.Text><br /><br />
 <Typography.Text type="info">Info state  text</Typography.Text><br /><br />
 <Typography.Text type="secondary">Secondary state  text</Typography.Text><br /><br />
</>;
```

#### 大小写转换

```tsx
/**
 * title: 大小写转换
 * description: 在一些场景中，用户更希望看到 大写、小写或首字母大写的内容，来试试自动转换吧。
 *
 */
import React from "react";
import { Typography } from 'nuwa-design';

export default () => <>
 <Typography.Text>This is Regular Text</Typography.Text><br /><br />
 <Typography.Text transform="uppercase">this is uppercase text</Typography.Text><br /><br />
 <Typography.Text transform="lowercase">THIS IS lowercase TEXT</Typography.Text><br /><br />
 <Typography.Text transform="capitalize">this is capitalize text</Typography.Text><br /><br />
</>;
```

### 标题

#### 基础标题

```tsx
/**
 * title: 基础标题
 * description: 我们内置了多层级标题（`h1` ~ `h6`），在一些场景下，不同层级的标题表示不同的作用。
 *
 */
import React from "react";
import { Typography } from 'nuwa-design';

export default () => <>
 <Typography.Title level={1}>H1. Heading 1</Typography.Title><br /><br />
 <Typography.Title level={2}>H2. Heading 2</Typography.Title><br /><br />
 <Typography.Title level={3}>H3. Heading 3</Typography.Title><br /><br />
 <Typography.Title level={4}>H4. Heading 4</Typography.Title><br /><br />
 <Typography.Title level={5}>H5. Heading 5</Typography.Title><br /><br />
 <Typography.Title level={6}>H6. Heading 6</Typography.Title><br /><br />
</>;
```

#### 带状态的标题

```tsx
/**
 * title: 带状态的标题
 * description: 标题类型支持文本类型的 **全部** 属性，因此适用于文本的属性，也将 **适用于** 标题。
 *
 */
import React from "react";
import { Typography } from 'nuwa-design';

export default () => <>
 <Typography.Title level={1} type="primary">H1. Heading 1</Typography.Title><br /><br />
 <Typography.Title level={2} type="success">H2. Heading 2</Typography.Title><br /><br />
 <Typography.Title level={3} type="info">H3. Heading 3</Typography.Title><br /><br />
 <Typography.Title level={4} type="warning">H4. Heading 4</Typography.Title><br /><br />
 <Typography.Title level={5} type="danger">H5. Heading 5</Typography.Title><br /><br />
 <Typography.Title level={6} type="secondary">H6. Heading 6</Typography.Title><br /><br />
</>;
```

### 链接

#### 基础链接

```tsx
/**
 * title: 基础链接
 * description: 我们内置了一组基础的链接样式，与主题色保持了一致。
 *
 */
import React from "react";
import { Typography } from 'nuwa-design';

export default () => <>
 <Typography.Link>Example link</Typography.Link><br /><br />
 <Typography.Link weight="bold">Example bold link</Typography.Link><br /><br />
 <Typography.Link weight="bolder">Example bolder link</Typography.Link><br /><br />
 <Typography.Link weight="boldest">Example boldest link</Typography.Link><br /><br />
</>;
```

#### 带状态的链接

```tsx
/**
 * title: 带状态的链接
 * description: 链接类型支持文本类型的 **全部** 属性，因此适用于文本的属性，也将 **适用于** 标题。
 *
 */
import React from "react";
import { Typography } from 'nuwa-design';

export default () => <>
 <Typography.Link type="primary">Example link</Typography.Link><br /><br />
 <Typography.Link type="success">Example bold link</Typography.Link><br /><br />
 <Typography.Link type="danger">Example bolder link</Typography.Link><br /><br />
 <Typography.Link type="warning">Example boldest link</Typography.Link><br /><br />
 <Typography.Link type="info">Example boldest link</Typography.Link><br /><br />
 <Typography.Link type="secondary">Example boldest link</Typography.Link><br /><br />
</>;
```


<API src="./Typography.tsx"></API>
