---
title: Color 色彩
order: 1
nav:
 path: /components
 title: 组件
 order: 1
group:
 path: /common
 title: 通用
---

## Color 色彩

为你所搭建的产品提供一致的外观视觉感受。

### 使用场景

* 产品的品牌颜色，体现产品特性和传播理念
* 关键行动点，操作状态、重要信息高亮，图形化等
* 明确的信息以及状态，比如成功、出错、失败、提醒、链接等
* 文字部分，包括背景、边框、分割线等场景
* ...

### 设计理念

为了避免视觉传达差异，我们设计一套特定的调色板来规定颜色，您只需要在组件中设置相同的类型，即可实现整个网站外观视觉统一的效果。

除内置在组件中的类型外，也欢迎您在自定义组件，或在网站的任何元素上，使用我们约定的 **样式修饰符**，即可直接接入我们的色彩体系。

### 功能示例

#### 品牌色

品牌颜色是鲜艳、友好的颜色，是体现产品特性和传播理念最直观的视觉元素之一。

```tsx
/**
 * inline: true
 */
import React from 'react';
import { Grid } from 'nuwa-design';
import ColorBox  from './demo/ColorBox';
import 'nuwa-design/lib/style/index.less';

export default () => <>
 <Grid.Row>
  <Grid.Col range={5}>
   <ColorBox
           className="nuwa-bg-brand"
           subColors={[
            'nuwa-bg-light-1-brand',
            'nuwa-bg-light-2-brand',
            'nuwa-bg-light-3-brand',
            'nuwa-bg-light-4-brand',
            'nuwa-bg-light-5-brand',
            'nuwa-bg-light-6-brand',
            'nuwa-bg-light-7-brand',
            'nuwa-bg-light-8-brand',
            'nuwa-bg-light-9-brand'
           ]}>
    Brand Color
    <div className="value">#409EFF</div>
   </ColorBox>
  </Grid.Col>
 </Grid.Row>
</>;
```


#### 主题色

主题色奠定了整个应用的基调，选择合适的主题色保持整个页面的美观和视觉统一。

```tsx
/**
 * inline: true
 */
import React from 'react';
import { Grid } from 'nuwa-design';
import ColorBox  from './demo/ColorBox';
import 'nuwa-design/lib/style/index.less';

export default () => <>
 <Grid.Row>
  <Grid.Col range={5}>
   <ColorBox
           className="nuwa-bg-dark"
           subColors={[
            'nuwa-bg-light-1-dark',
            'nuwa-bg-light-2-dark',
            'nuwa-bg-light-3-dark',
            'nuwa-bg-light-4-dark',
            'nuwa-bg-light-5-dark',
            'nuwa-bg-light-6-dark',
            'nuwa-bg-light-7-dark',
            'nuwa-bg-light-8-dark',
            'nuwa-bg-light-9-dark'
           ]}>
    Dark Color
    <div className="value">#282A3C</div>
   </ColorBox>
  </Grid.Col>
  <Grid.Col range={5}>
   <ColorBox
           style={{ color: '#454d64' }}
           className="nuwa-bg-light"
           subColors={[
            'nuwa-bg-dark-1-light',
            'nuwa-bg-dark-2-light',
            'nuwa-bg-dark-3-light',
            'nuwa-bg-dark-4-light',
            'nuwa-bg-dark-5-light',
            'nuwa-bg-dark-6-light',
            'nuwa-bg-dark-7-light',
            'nuwa-bg-dark-8-light',
            'nuwa-bg-dark-9-light'
           ]}>
    Light Color
    <div className="value">#FFFFFF</div>
   </ColorBox>
  </Grid.Col>
 </Grid.Row>
</>;
```


#### 辅助色

辅助色代表了明确的信息以及状态，比如成功、出错、失败、提醒、链接等。辅助色的选取需要遵守用户对色彩的基本认知。我们建议在一套产品体系下，功能色尽量保持一致，不要有过多的自定义干扰用户的认知体验。

```tsx
/**
 * inline: true
 */
import React from 'react';
import { Grid } from 'nuwa-design';
import ColorBox  from './demo/ColorBox';
import 'nuwa-design/lib/style/index.less';

export default () => <>
 <Grid.Row>
  <Grid.Col range={4}>
   <ColorBox
           className="nuwa-bg-primary"
           subColors={[
            'nuwa-bg-light-1-primary',
            'nuwa-bg-light-2-primary',
            'nuwa-bg-light-3-primary',
            'nuwa-bg-light-4-primary',
            'nuwa-bg-light-5-primary',
            'nuwa-bg-light-6-primary',
            'nuwa-bg-light-7-primary',
            'nuwa-bg-light-8-primary',
            'nuwa-bg-light-9-primary'
           ]}>
    Primary
    <div className="value">#5867DD</div>
   </ColorBox>
  </Grid.Col>
  <Grid.Col range={4}>
   <ColorBox
           className="nuwa-bg-success"
           subColors={[
            'nuwa-bg-light-1-success',
            'nuwa-bg-light-2-success',
            'nuwa-bg-light-3-success',
            'nuwa-bg-light-4-success',
            'nuwa-bg-light-5-success',
            'nuwa-bg-light-6-success',
            'nuwa-bg-light-7-success',
            'nuwa-bg-light-8-success',
            'nuwa-bg-light-9-success'
           ]}>
    Success
    <div className="value">#0ABB87</div>
   </ColorBox>
  </Grid.Col>
  <Grid.Col range={4}>
   <ColorBox
           className="nuwa-bg-danger"
           subColors={[
            'nuwa-bg-light-1-danger',
            'nuwa-bg-light-2-danger',
            'nuwa-bg-light-3-danger',
            'nuwa-bg-light-4-danger',
            'nuwa-bg-light-5-danger',
            'nuwa-bg-light-6-danger',
            'nuwa-bg-light-7-danger',
            'nuwa-bg-light-8-danger',
            'nuwa-bg-light-9-danger'
           ]}>
    Danger
    <div className="value">#FD397A</div>
   </ColorBox>
  </Grid.Col>
  <Grid.Col range={4}>
   <ColorBox
           className="nuwa-bg-warning"
           subColors={[
            'nuwa-bg-light-1-warning',
            'nuwa-bg-light-2-warning',
            'nuwa-bg-light-3-warning',
            'nuwa-bg-light-4-warning',
            'nuwa-bg-light-5-warning',
            'nuwa-bg-light-6-warning',
            'nuwa-bg-light-7-warning',
            'nuwa-bg-light-8-warning',
            'nuwa-bg-light-9-warning'
           ]}>
    Warning
    <div className="value">#FFB822</div>
   </ColorBox>
  </Grid.Col>
  <Grid.Col range={4}>
   <ColorBox
           className="nuwa-bg-info"
           subColors={[
            'nuwa-bg-light-1-info',
            'nuwa-bg-light-2-info',
            'nuwa-bg-light-3-info',
            'nuwa-bg-light-4-info',
            'nuwa-bg-light-5-info',
            'nuwa-bg-light-6-info',
            'nuwa-bg-light-7-info',
            'nuwa-bg-light-8-info',
            'nuwa-bg-light-9-info'
           ]}>
    Info
    <div className="value">#909399</div>
   </ColorBox>
  </Grid.Col>
 </Grid.Row>
</>;
```

#### 中性色

中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。

```tsx
/**
 * inline: true
 */
import React from 'react';
import { Grid } from 'nuwa-design';
import ColorBox from './demo/ColorBox';
import 'nuwa-design/lib/style/index.less';

const results = [];

const colors = ['#FFFFFF', '#F8F9FA', '#E9ECEF', '#DEE2E6', '#CED4DA', '#ADB5BD', '#6C757D', '#495057', '#343A40', '#000000']

for ( let i = 0; i < 10; i++ ) {
 results.push(
         <Grid.Col range={4}>
          <ColorBox className={`small-box nuwa-bg-gray-${i}`} style={ i < 6 ? { color: '#454d64' } : {}}>
           {i === 0 ? 'White': (i === 9 ? 'Black' : `Gray ${i*100}`)}
           <div className="value">{colors[i]}</div>
          </ColorBox>
         </Grid.Col>
 )
}

export default () => <>
 <Grid.Row>
  {results}
 </Grid.Row>
</>;
```
