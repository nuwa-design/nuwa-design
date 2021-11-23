---
title: Button 按钮 nav:
path: /components title: 组件 order: 2 group:
path: /common title: 通用 order: 1
---

## Button 按钮

只需轻点按钮，用户就可以触发动作或做出选择。

### 使用场景

按钮可以展示用户能进行的操作。 他们通常直接放置在您的用户界面中。

* Dialogs 对话框
* Modal windows 模态窗口
* Forms 表单
* Cards 卡片
* Toolbars 工具栏
* 等...

### 功能示例

#### 基础示例

```tsx
/**
 * title: 基础示例
 * description: 这是一组基础按钮，通过指定不同的 `type` 属性，可实现不同场景的按钮展示。
 *
 */
import React, {useCallback} from "react";
import {Button} from 'nuwa-design';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee, faTag} from '@fortawesome/free-solid-svg-icons'

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
import React, {useCallback} from "react";
import {Button} from 'nuwa-design';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee, faTag} from '@fortawesome/free-solid-svg-icons'

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
import React, {useCallback} from "react";
import {Button} from 'nuwa-design';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee, faTag} from '@fortawesome/free-solid-svg-icons'

const onClick = useCallback((e) => {
    // todo something here
    console.log('trigger click', e)
}, []);

export default () => <>
    <Button type="primary" size="large" onClick={onClick}>Large</Button> &nbsp;
    <Button type="primary" size="midume" onClick={onClick}>Medium</Button> &nbsp;
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
import React, {useCallback} from "react";
import {Button} from 'nuwa-design';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee, faTag} from '@fortawesome/free-solid-svg-icons'

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

#### 布局方式

```tsx
/**
 * title: 布局方式
 * description: 无论是行内布局（`inline`），还是块状布局（`block`），按钮总是能得心应手。
 */
import React, {useCallback} from "react";
import {Button} from 'nuwa-design';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee, faTag} from '@fortawesome/free-solid-svg-icons'

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

<API></API>

[HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type)

