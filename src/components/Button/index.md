---
nav:
  title: 组件
  order: 2
  path: /components
---

## Button

Demo:

```tsx
import React, { useCallback } from "react";
import { Button } from 'nuwa-design';

const onClick = useCallback((e) => {
  console.log('trigger click', e)
}, []);

export default () => <>
  <Button type="primary" onClick={onClick}>Primary</Button> &nbsp;
  <Button type="secondary">Secondary</Button>&nbsp;
  <Button type="success">Success</Button>&nbsp;
  <Button type="danger">Danger</Button>&nbsp;
  <Button type="info">Info</Button>&nbsp;
  <Button type="warning">Warning</Button><br /><br />
  <Button type="primary" btnType="outlined" onClick={onClick}>Primary</Button> &nbsp;
  <Button type="secondary" btnType="outlined">Secondary</Button>&nbsp;
  <Button type="success" btnType="outlined">Success</Button>&nbsp;
  <Button type="danger" btnType="outlined">Danger</Button>&nbsp;
  <Button type="info" btnType="outlined">Info</Button>&nbsp;
  <Button type="warning" btnType="outlined">Warning</Button>&nbsp;
  <br />
  <br />
  <Button type="primary" hoverType="danger" onClick={onClick}>Primary</Button> &nbsp;
  <Button type="secondary" hoverType="success">Secondary</Button>&nbsp;
  <Button type="success">Success</Button>&nbsp;
  <Button type="danger">Danger</Button>&nbsp;
  <Button type="info">Info</Button>&nbsp;
  <Button type="warning">Warning</Button><br /><br />
  <Button type="primary" hoverType="danger" btnType="outlined" onClick={onClick}>Primary</Button> &nbsp;
  <Button type="secondary" btnType="outlined" hoverType="warning">Secondary</Button>&nbsp;
  <Button type="success" btnType="outlined">Success</Button>&nbsp;
  <Button type="danger" btnType="outlined">Danger</Button>&nbsp;
  <Button type="info" btnType="outlined">Info</Button>&nbsp;
  <Button type="warning" btnType="outlined">Warning</Button>&nbsp;
  <br />
  <br />
  <Button type="primary" btnShape="round" onClick={onClick}>Primary</Button> &nbsp;
  <Button type="primary" btnShape="square" onClick={onClick}>Primary</Button> &nbsp;
  <Button type="primary" btnShape="pill" onClick={onClick}>Primary</Button> &nbsp;
  <Button type="primary" btnShape="circle" onClick={onClick}>1</Button> &nbsp;
  <Button type="primary" btnShape="round" btnType="outlined" onClick={onClick}>Primary</Button> &nbsp;
  <Button type="primary" btnShape="square" btnType="outlined" onClick={onClick}>Primary</Button> &nbsp;
  <Button type="primary" btnShape="pill" btnType="outlined" onClick={onClick}>Primary</Button> &nbsp;
  <Button type="primary" btnShape="circle" btnType="outlined" onClick={onClick}>1</Button> &nbsp;
</>;
```

<API></API>

[HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type)

