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

```tsx
/**
 * title: 基础示例
 * description: 这是一组基础按钮，通过指定 `type` 属性，即可实现不同场景的按钮展示
 */
import React, { useCallback } from "react";
import { Button } from 'nuwa-design';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faTag } from '@fortawesome/free-solid-svg-icons'

const onClick = useCallback( ( e ) => {
  // todo something here
  console.log( 'trigger click', e )
}, [] );

export default () => <>
  <Button type="primary" onClick={ onClick }>Primary</Button> &nbsp;
  <Button type="secondary" onClick={ onClick }>Secondary</Button>&nbsp;
  <Button type="success" onClick={ onClick }>Success</Button>&nbsp;
  <Button type="danger" onClick={ onClick }>Danger</Button>&nbsp;
  <Button type="info" onClick={ onClick }>Info</Button>&nbsp;
  <Button type="warning" onClick={ onClick }>Warning</Button>
</>;
```

```tsx
/**
 * title: 按钮类型
 * description: 除了基础按钮，我们还为您提供了多种类型可供选择，
 */
import React, { useCallback } from "react";
import { Button } from 'nuwa-design';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faTag } from '@fortawesome/free-solid-svg-icons'

const onClick = useCallback( ( e ) => {
  // todo something here
  console.log( 'trigger click', e )
}, [] );

export default () => <>
  <Button type="primary" btnType="outlined" onClick={ onClick }>Primary</Button> &nbsp;
  <Button type="secondary" btnType="outlined" onClick={ onClick }>Secondary</Button>&nbsp;
  <Button type="success" btnType="outlined" onClick={ onClick }>Success</Button>&nbsp;
  <Button type="danger" btnType="outlined" onClick={ onClick }>Danger</Button>&nbsp;
  <Button type="info" btnType="outlined" onClick={ onClick }>Info</Button>&nbsp;
  <Button type="warning" btnType="outlined" onClick={ onClick }>Warning</Button>
  <br />
  <br />
  <Button type="primary" btnType="link" onClick={ onClick }>Link</Button> &nbsp;
  <Button type="secondary" btnType="link"  onClick={ onClick }>Link</Button> &nbsp;
  <Button type="success" btnType="link" onClick={ onClick }>Success</Button>&nbsp;
  <Button type="danger" btnType="link" onClick={ onClick }>Danger</Button>&nbsp;
  <Button type="info" btnType="link" onClick={ onClick }>Info</Button>&nbsp;
  <Button type="warning" btnType="link" onClick={ onClick }>Warning</Button>

</>;
```

<API></API>

[HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type)

