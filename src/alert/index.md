---
title: Alert 警告提示
order: 1
nav:
 path: /components
 title: 组件
 order: 1
group:
 path: /response
 title: 反馈
 order: 4
---

## Alert 警告提示

一个警告提示组件展示了一段简短且重要的信息，在不影响用户操作的同时能够吸引用户的注意力。

### 使用场景


### 功能示例

#### 基础警告提示

```tsx
/**
 * title: 基础进度条
 * description: 标准的进度条，支持传入 `type` 类型设置不同状态的进度条。
 * hideActions: '["CSB"]'
 */
import React from 'react';
import { Alert } from 'nuwa-design';
import CommonDemo from '../common/demo/commonDemo';

export default () => (
  <CommonDemo>
    <Alert />
  </CommonDemo>
);
```
