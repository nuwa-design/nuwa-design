---
title: Progress 进度条 
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

## Progress 进度条

表示了一个不明确的等待时间，或者显示处理过程的时间长短。

### 使用场景

进度条能够将当前处理过程的状态通知用户，例如加载一个应用，提交一个表单或保存一些更新。

* 定量指示器显示一个操作消耗多长时间。
* 不定量指示器可视化了一个不确定的操作等待时间。

甚至在加载 JavaScript 之前，组件的动画就尽可能地依赖 CSS 来工作。

### 设计理念

在操作需要较长时间才能完成时，我们建议为用户显示该操作的当前进度和状态。例如：当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过 **2** 秒时。

### 功能示例

#### 基础进度条

```tsx
/**
 * title: 基础进度条
 * description: 标准的进度条，支持传入 `type` 类型设置不同状态的进度条。
 * hideActions: '["CSB"]'
 */
import React from 'react';
import { Progress } from 'nuwa-design';
import CommonDemo from '../common/demo/commonDemo';

export default () => (
  <CommonDemo>
    <Progress percent={20} />
    <Progress percent={45} type="success" />
    <Progress percent={60} type="danger" />
    <Progress percent={80} type="warning" />
    <Progress percent={100} type="info" />
  </CommonDemo>
);
```

#### 本文提示

```tsx
/**
 * title: 本文提示
 * description: 支持传入 `format` 方法来自定义进度条文本提示内容。
 * hideActions: '["CSB"]'
 */
import React from 'react';
import { Progress } from 'nuwa-design';
import CommonDemo from '../common/demo/commonDemo';

export default () => (
  <CommonDemo>
    <Progress percent={20} format={(percent) => `${percent}%`} />
    <Progress percent={95} type="success" format={(percent) => `坚持一下，快成功了！`} />
    <Progress percent={60} type="danger" format={(percent) => `失败，当前进度：${percent}%`} />
  </CommonDemo>
);
```

#### 多个进度条

```tsx
/**
 * title: 多个进度条
 * description: 如果需要，可以在一个进度条组件内可以添加多个进度条，只需要指定 `bars` 属性即可。
 * hideActions: '["CSB"]'
 */
import React from 'react';
import { Progress } from 'nuwa-design';
import CommonDemo from '../common/demo/commonDemo';

export default () => (
  <CommonDemo>
    <Progress bars={[
      { percent: 10, type: 'success' },
      { percent: 30, type: 'danger' },
      { percent: 15, type: 'warning' }
    ]} />
    <Progress bars={[
      { percent: 25 },
      { percent: 60, type: 'info' },
    ]} />
  </CommonDemo>
);
```

#### 条纹进度条

```tsx
/**
 * title: 条纹进度条
 * description: 为进度条添加 `striped` 属性即可添加条纹样式，这是通过 CSS 的渐变功能在进度条的背景色上应用条纹效果实现的。也可以为进度条添加 `animated` 属性，利用 CSS3 动画功能添加条纹从右到左滚动的动画效果。
 * hideActions: '["CSB"]'
 */
import React from 'react';
import { Progress } from 'nuwa-design';
import CommonDemo from '../common/demo/commonDemo';

export default () => (
  <CommonDemo>
    <Progress percent={20} striped />
    <Progress percent={40} type="success" animated />
    <Progress animated bars={[
      { percent: 45, type: 'info' },
      { percent: 20, type: 'warning' },
    ]} />
    <Progress bars={[
      { percent: 25, type: 'danger', striped: true },
      { percent: 60, type: 'success', animated: true },
    ]} />
  </CommonDemo>
);
```

#### 进度条高度

```tsx
/**
 * title: 进度条高度
 * description: 我们预设了三种高度的进度条，也支持通过 `height` 属性设置自定义高度。
 * hideActions: '["CSB"]'
 */
import React from 'react';
import { Progress } from 'nuwa-design';
import CommonDemo from '../common/demo/commonDemo';

export default () => (
  <CommonDemo>
    <Progress percent={20} height="small" />
    <Progress percent={40} type="success" height="large" />
    <Progress percent={60} type="danger" height={80} />
  </CommonDemo>
);
```

#### 动态示例

```tsx
/**
 * title: 动态示例
 * description: 演示了一个从 `0` 到 `100` 进度往复的动态示例。
 * hideActions: '["CSB"]'
 */
import React from 'react';
import StepDemo from './demo/stepDemo';

export default () => <StepDemo />;
```

<API src="./progress.tsx"></API>
