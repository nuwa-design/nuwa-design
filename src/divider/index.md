---
title: Divider 分隔线
nav:
 path: /components
 title: 组件
 order: 1
group:
 path: /layout
 title: 布局
 order: 3
---

## Divider 分隔线

分隔线是对列表和布局中的内容进行分组的一条细线。

### 使用场景

分隔线可以将内容分成清晰的几组。

### 功能示例

#### 基础分隔线

```tsx
/**
 * title: 基础分隔线
 * description: 只需要在 `Divider` 组件中设置文本或组件（或空），即可实现基础的分隔线功能。
 * hideActions: '["CSB"]'
 */
import React from "react";
import { Divider } from 'nuwa-design';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'

export default () => <>
  <Divider /><br /><br />
  <Divider>Basic Divider</Divider><br /><br />
  <Divider><FontAwesomeIcon icon={faHome} /> Home</Divider>
</>;
```

#### 对齐方式

```tsx
/**
 * title: 对齐方式
 * description: 分隔线支持左对齐 `left` 、居中对齐 `center` 和右对齐 `right` 。
 * hideActions: '["CSB"]'
 */
import React from "react";
import { Divider } from 'nuwa-design';

export default () => <>
  <Divider align="left">Left</Divider><br /><br />
  <Divider align="center">Center</Divider><br /><br />
  <Divider align="right">Right</Divider>
</>;
```

#### 间距

```tsx
/**
 * title: 间距
 * description: 我们按照文字距离分隔线的距离设计了三种间距，较小 `small` 、适中 `medium` 和较大 `large`。
 * hideActions: '["CSB"]'
 */
import React from "react";
import { Divider } from 'nuwa-design';

export default () => <>
  <Divider textPadding="small">Small Padding Divider</Divider><br /><br />
  <Divider textPadding="medium">Medium Padding Divider</Divider><br /><br />
  <Divider textPadding="large">Large Padding Divider</Divider>
</>;
```


#### 类型

```tsx
/**
 * title: 类型
 * description: 按照组件库设计理念，分隔线支持配置不同的类型，您可以选择适合场景的分隔线。
 * hideActions: '["CSB"]'
 */
import React from "react";
import { Divider } from 'nuwa-design';

export default () => <>
  <Divider type="secondary">Secondary</Divider><br /><br />
  <Divider type="primary">Primary</Divider><br /><br />
  <Divider type="success">Success</Divider><br /><br />
  <Divider type="warning">Warning</Divider><br /><br />
  <Divider type="danger">Danger</Divider><br /><br />
  <Divider type="info">Info</Divider>
</>;
```

<API src="./divider.tsx" />
 
