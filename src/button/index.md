---
title: Button 按钮 
nav:
 path: /components
 title: 组件
 order: 1
group:
 path: /common
 title: 通用
 order: 2
---
## Button 按钮 <Badge type="error">NEW!</Badge>

只需轻点按钮，用户就可以触发动作或做出选择。

### 使用场景

按钮可以展示用户允许进行的操作。 他们通常直接放置在您的用户界面中。

* Dialogs 对话框
* Modal windows 模态窗口
* Forms 表单
* Cards 卡片
* Toolbars 工具栏
* ...

### 设计理念

* **主要按钮**（Primay）：标示主要操作行为，引导用户执行操作，一个操作区域建议只设置一个主要按钮。例如：表单的 "提交" 按钮等。
* **次要按钮**（Secondary）：标示常规交互行为，可设置多个。例如：对话框的 "关闭" 按钮等。
* **建议按钮**（Success）：标示当前操作会带来正向交互行为。例如： "领取" 奖励按钮等。
* **警告按钮**（Warning）：标示当前操作行为具有一定危险性，但可以恢复。例如：权限的 "禁用" 按钮
* **危险按钮**（Danger）：标示当前操作行为具有一定危险性，且可能无法恢复。例如： "删除" 按钮等。

### 功能示例

#### 基础示例

```tsx
/**
 * title: 基础示例
 * description: 这是一组基础按钮，通过指定不同的 `type` 属性，可实现不同场景的按钮展示。
 *
 */
import React, { useCallback } from "react";
import { Button } from 'nuwa-design';

const onClick = useCallback((e) => {
    // todo something here
    console.log('trigger click', e)
}, []);

export default () => <>
    <Button type="primary" onClick={onClick}>Primary</Button> &nbsp;
    <Button type="secondary" onClick={onClick}>Secondary</Button>&nbsp;
    <Button type="success" onClick={onClick}>Success</Button>&nbsp;
    <Button type="danger" onClick={onClick}>Danger</Button>&nbsp;
    <Button type="info" onClick={onClick}>Info</Button>&nbsp;
    <Button type="warning" onClick={onClick}>Warning</Button>
</>;
```

#### 更多按钮类型

```tsx
/**
 * title: 更多按钮类型
 * description: 除了基础按钮，我们还为您提供了一套线框按钮（`outlined`）和文字按钮（`link`）可供选择，
 */
import React, { useCallback } from "react";
import { Button } from 'nuwa-design';

const onClick = useCallback((e) => {
    // todo something here
    console.log('trigger click', e)
}, []);

export default () => <>
    <Button type="primary" btnType="outlined" onClick={onClick}>Primary</Button> &nbsp;
    <Button type="secondary" btnType="outlined" onClick={onClick}>Secondary</Button>&nbsp;
    <Button type="success" btnType="outlined" onClick={onClick}>Success</Button>&nbsp;
    <Button type="danger" btnType="outlined" onClick={onClick}>Danger</Button>&nbsp;
    <Button type="info" btnType="outlined" onClick={onClick}>Info</Button>&nbsp;
    <Button type="warning" btnType="outlined" onClick={onClick}>Warning</Button>
    <br/>
    <br/>
    <Button type="primary" btnType="link" onClick={onClick}>Primary</Button> &nbsp;
    <Button type="secondary" btnType="link" onClick={onClick}>Secondary</Button> &nbsp;
    <Button type="success" btnType="link" onClick={onClick}>Success</Button>&nbsp;
    <Button type="danger" btnType="link" onClick={onClick}>Danger</Button>&nbsp;
    <Button type="info" btnType="link" onClick={onClick}>Info</Button>&nbsp;
    <Button type="warning" btnType="link" onClick={onClick}>Warning</Button>

</>;
```

#### 按钮尺寸

```tsx
/**
 * title: 按钮尺寸
 * description: 除了常规按钮尺寸外，我们还提供了通过修改 `size` 属性设置更大尺寸（`large`）或更小（`small`）尺寸。
 */
import React, { useCallback } from "react";
import { Button } from 'nuwa-design';

const onClick = useCallback((e) => {
    // todo something here
    console.log('trigger click', e)
}, []);

export default () => <>
    <Button type="primary" size="large" onClick={onClick}>Large</Button> &nbsp;
    <Button type="primary" size="medium" onClick={onClick}>Medium</Button> &nbsp;
    <Button type="primary" size="small" onClick={onClick}>Small</Button> &nbsp;
    <br/>
    <br/>
    <Button type="primary" size="large" btnType="outlined" onClick={onClick}>Large</Button> &nbsp;
    <Button type="primary" size="medium" btnType="outlined" onClick={onClick}>Medium</Button> &nbsp;
    <Button type="primary" size="small" btnType="outlined" onClick={onClick}>Small</Button> &nbsp;
    <br/>
    <br/>
    <Button type="primary" size="large" btnType="link" onClick={onClick}>Large</Button> &nbsp;
    <Button type="primary" size="medium" btnType="link" onClick={onClick}>Medium</Button> &nbsp;
    <Button type="primary" size="small" btnType="link" onClick={onClick}>Small</Button> &nbsp;
</>;
```

#### 不同形状

```tsx
/**
 * title: 不同形状
 * description: 看腻了圆角按钮？来试试直角（`square`）、扁平形（`pill`）和圆形（`circle`）形状吧。
 */
import React, { useCallback } from "react";
import { Button } from 'nuwa-design';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons'

const onClick = useCallback((e) => {
    // todo something here
    console.log('trigger click', e)
}, []);

export default () => <>
    <Button type="success" btnShape="round" onClick={onClick}>Round Shape</Button> &nbsp;
    <Button type="warning" btnShape="square" onClick={onClick}>Square Shape</Button> &nbsp;
    <Button type="danger" btnShape="pill" onClick={onClick}>Pill Shape</Button> &nbsp;
    <Button type="info" btnShape="circle" onClick={onClick} iconOnly><FontAwesomeIcon icon={faTag} /></Button> &nbsp;
    <br/>
    <br/>
    <Button type="success" btnShape="round" btnType="outlined" onClick={onClick}>Round Shape</Button> &nbsp;
    <Button type="warning" btnShape="square" btnType="outlined" onClick={onClick}>Square Shape</Button> &nbsp;
    <Button type="danger" btnShape="pill" btnType="outlined" onClick={onClick}>Pill Shape</Button> &nbsp;
    <Button type="info" btnShape="circle" btnType="outlined" onClick={onClick} iconOnly><FontAwesomeIcon icon={faTag} /></Button> &nbsp;
    <br/>
    <br/>
    <Button type="success" btnShape="round" btnType="link" onClick={onClick}>Round Shape</Button> &nbsp;
    <Button type="warning" btnShape="square" btnType="link" onClick={onClick}>Square Shape</Button> &nbsp;
    <Button type="danger" btnShape="pill" btnType="link" onClick={onClick}>Pill Shape</Button> &nbsp;
    <Button type="info" btnShape="circle" btnType="link" onClick={onClick} iconOnly><FontAwesomeIcon icon={faTag} /></Button> &nbsp;
</>;
```

<Alert type="warning">
  警告：添加了 iconOnly 后，按钮 children 仅接受图标元素或组件。
</Alert>

#### 布局方式

```tsx
/**
 * title: 布局方式
 * description: 无论是行内布局（`inline`），还是块状布局（`block`），按钮总是能得心应手。
 */
import React, { useCallback } from "react";
import { Button } from 'nuwa-design';

const onClick = useCallback((e) => {
    // todo something here
    console.log('trigger click', e)
}, []);

export default () => <>
    <Button type="success" btnShape="round" size="large" onClick={onClick}>Inline</Button> &nbsp;
    <Button type="warning" btnShape="round" onClick={onClick}>Inline</Button> &nbsp;
    <Button type="danger" btnShape="round"  size="small" onClick={onClick}>Inline</Button> &nbsp;<br /><br />
    <Button type="success" btnShape="round" size="large" block onClick={onClick}>Block</Button><br/><br />
    <Button type="warning" btnShape="round" block onClick={onClick}>Block</Button><br/><br />
    <Button type="danger" btnShape="round" size="small" block onClick={onClick}>Block</Button><br/>
</>;
```

#### 带图标的按钮

```tsx
/**
 * title: 带图标的按钮
 * description: 我们对业界主流的图标库进行了优化展示，您可以直接使用第三方图标库，也支持您只展示图标（`onlyIcon`）。
 */
import React, { useCallback } from "react";
import { Button } from 'nuwa-design';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faWallet, faGift } from '@fortawesome/free-solid-svg-icons'

const onClick = useCallback((e) => {
    // todo something here
    console.log('trigger click', e)
}, []);

export default () => <>
  <Button type="warning" btnShape="round" size="large" onClick={onClick}><FontAwesomeIcon icon={faTag} />Label</Button> &nbsp;
  <Button type="primary" btnShape="round" onClick={onClick}><FontAwesomeIcon icon={faWallet} />Wallet</Button> &nbsp;
  <Button type="success" btnShape="round" size="small" onClick={onClick}><FontAwesomeIcon icon={faGift} />Gift</Button> &nbsp;<br /><br />
  <Button type="warning" btnType="outlined" btnShape="round" size="large" onClick={onClick}><FontAwesomeIcon icon={faTag} />Label</Button> &nbsp;
  <Button type="primary" btnType="outlined" btnShape="round" onClick={onClick}><FontAwesomeIcon icon={faWallet} />Wallet</Button> &nbsp;
  <Button type="success" btnType="outlined" btnShape="round" size="small" onClick={onClick}><FontAwesomeIcon icon={faGift} />Gift</Button> &nbsp;<br/><br/>
  <Button type="warning" btnShape="round" size="large" iconOnly onClick={onClick}><FontAwesomeIcon icon={faTag} /></Button> &nbsp;
  <Button type="primary" btnShape="round" iconOnly onClick={onClick}><FontAwesomeIcon icon={faWallet} /></Button> &nbsp;
  <Button type="success" btnShape="round" size="small" iconOnly onClick={onClick}><FontAwesomeIcon icon={faGift} /></Button> &nbsp;
  <Button type="warning" btnType="outlined" btnShape="round" size="large" iconOnly onClick={onClick}><FontAwesomeIcon icon={faTag} /></Button> &nbsp;
  <Button type="primary" btnType="outlined" btnShape="round" iconOnly onClick={onClick}><FontAwesomeIcon icon={faWallet} /></Button> &nbsp;
  <Button type="success" btnType="outlined" btnShape="round" size="small" iconOnly onClick={onClick}><FontAwesomeIcon icon={faGift} /></Button> &nbsp;
</>;
```
<Alert type="info">
  提示：按钮组件针对最终生成的 DOM 标签为 i 或者 svg 类型的图标库进行了优化。
</Alert>

**推荐的第三方图标库**
- [Font Awesome](https://fontawesome.com/)
- [Flaticon](https://www.freepikcompany.com/flaticon)
- [Line Awesome](https://icons8.com/line-awesome)
- [Ant Design Icon](https://ant.design/components/icon-cn/)

#### 不同状态

```tsx
/**
 * title: 带图标的按钮
 * description: 在某些业务场景，您可以设置 `disabled` 状态禁止按钮点击，也可以设置 `active` 表示当前按钮被激活。
 */
import React, { useCallback } from "react";
import { Button } from 'nuwa-design';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons'

const onClick = useCallback((e) => {
    // todo something here
    console.log('trigger click', e)
}, []);

export default () => <>
  <Button type="primary" onClick={onClick}><FontAwesomeIcon icon={faTag} />Normail</Button> &nbsp;
  <Button type="primary" active onClick={onClick}><FontAwesomeIcon icon={faTag} />Active</Button> &nbsp;
  <Button type="primary" disabled onClick={onClick}><FontAwesomeIcon icon={faTag} />Disabled</Button> &nbsp;<br /><br />
  <Button type="success" btnType="outlined" onClick={onClick}><FontAwesomeIcon icon={faTag} />Normail</Button> &nbsp;
  <Button type="success" btnType="outlined" active onClick={onClick}><FontAwesomeIcon icon={faTag} />Active</Button> &nbsp;
  <Button type="success" btnType="outlined" disabled onClick={onClick}><FontAwesomeIcon icon={faTag} />Disabled</Button> &nbsp;<br /><br />
</>;
```

<Alert type="error">
 警告：禁用态和激活态无法被同时添加到按钮组件上。
</Alert>

#### 自定义标签

```tsx
/**
 * title: 自定义标签
 * description: 考虑到 `button` 标签可能存在副作用，因此我们允许您使用自定义标签 `customTag` 模拟按钮行为，例如 `a` 或者 `span` 等，自定义标签保持原生 `button` 一致的交互方式。
 */
import React, { useCallback } from "react";
import { Button } from 'nuwa-design';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons'

const onClick = useCallback((e) => {
    // todo something here
    console.log('trigger click', e)
}, []);

export default () => <>
  <Button customTag="span" type="primary" onClick={onClick}><FontAwesomeIcon icon={faTag} />Span Button</Button> &nbsp;
  <Button customTag="span" type="success"  btnType="outlined" onClick={onClick}><FontAwesomeIcon icon={faTag} />Span Button</Button> &nbsp;<br /><br />
  <Button customTag="a" type="primary" onClick={onClick}><FontAwesomeIcon icon={faTag} />A Button</Button> &nbsp;
  <Button customTag="a" type="success"  btnType="outlined" onClick={onClick}><FontAwesomeIcon icon={faTag} />A Button</Button> &nbsp;
</>;
```
<Alert type="warning">
  注意：建议选择副作用低的通用标签作为自定义标签属性值，例如 a 标签、span 标签、div 标签等，使用特殊类标签可能会需要开发者自行清空其副作用，例如 input 标签, img 标签等。
</Alert>

#### 个性化定制

<code src="./demo/CustomBtn.tsx"></code>

<API src="./index.ts"></API>

[HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type)

## 样式变量

若现有按钮样式无法满足您的业务场景，我们提供了丰富的按钮 [Less Variables](https://github.com/nuwa-design/nuwa-design/blob/main/src/styles/themes/default/variables/button.less) 供您配置。您可通过覆盖 `Less Variables` 的方式生成您专属的按钮样式。

