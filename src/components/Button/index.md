---
title: Button 按钮
nav:
 path: /components
 title: 组件
 order: 2
group:
 path: /common
 title: 通用
 order: 1
---

## Button 按钮

Demo:

```tsx
import React, { useCallback } from "react";
import { Button } from 'nuwa-design';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faTag } from '@fortawesome/free-solid-svg-icons'


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
  <br />
  <br />
  <Button type="primary" disabled btnShape="round" onClick={onClick}>Primary</Button> &nbsp;
  <Button type="primary" disabled btnShape="round" btnType="outlined" onClick={onClick}>Primary</Button> &nbsp;
  <Button type="primary" active btnShape="round" onClick={onClick}>Primary</Button> &nbsp;
  <Button type="primary" active btnShape="round" btnType="outlined" onClick={onClick}>Primary</Button> &nbsp;
  <br />
  <br />
  <Button type="primary" size="large" onClick={onClick}>Large</Button> &nbsp;
  <Button type="primary" size="medium" onClick={onClick}>Meidum</Button> &nbsp;
  <Button type="primary" size="small" onClick={onClick}>Small</Button> &nbsp;
  <br />
  <br />
  <Button type="primary" size="large" btnType="outlined" onClick={onClick}>Large</Button> &nbsp;
  <Button type="primary" size="medium" btnType="outlined" onClick={onClick}>Meidum</Button> &nbsp;
  <Button type="primary" size="small" btnType="outlined" onClick={onClick}>Small</Button> &nbsp;
  <br />
  <br />
  <Button type="primary" size="large" btnType="link" onClick={onClick}>Large</Button> &nbsp;
  <Button type="primary" size="medium" btnType="link" onClick={onClick}>Meidum</Button> &nbsp;
  <Button type="primary" size="small" btnType="link" onClick={onClick}>Small</Button> &nbsp;
  <br />
  <br />
  <Button type="primary" onClick={onClick}>
    <FontAwesomeIcon icon={faTag} />
    Label
  </Button> &nbsp;
  <Button type="primary" size="large" onClick={onClick}>
    <FontAwesomeIcon icon={faTag} />
    Label
  </Button> &nbsp;
  <Button type="warning" size="small" onClick={onClick}>
    <FontAwesomeIcon icon={faTag} />
    Label
  </Button> &nbsp;
  <Button type="primary" btnType="outlined" onClick={onClick}>
    <FontAwesomeIcon icon={faTag} />
    Label
  </Button> &nbsp;
  <Button type="primary" btnType="outlined" size="large" onClick={onClick}>
    <FontAwesomeIcon icon={faTag} />
    Label
  </Button> &nbsp;
  <Button type="danger" btnType="outlined" size="small" onClick={onClick}>
    <FontAwesomeIcon icon={faTag} />
    Label
  </Button> &nbsp;
  <br />
  <br />
  <Button type="warning" size="large" iconOnly onClick={onClick}>
    <FontAwesomeIcon icon={faTag} />
  </Button> &nbsp;
  <Button type="danger" iconOnly onClick={onClick}>
    <FontAwesomeIcon icon={faTag} />
  </Button> &nbsp;
  <Button type="brand" size="small" iconOnly onClick={onClick}>
    <FontAwesomeIcon icon={faTag} />
  </Button> &nbsp;
  <Button type="warning" size="large"  btnType="outlined" iconOnly onClick={onClick}>
    <FontAwesomeIcon icon={faTag} />
  </Button> &nbsp;
  <Button type="danger"  btnType="outlined" iconOnly onClick={onClick}>
    <FontAwesomeIcon icon={faTag} />
  </Button> &nbsp;
  <Button type="brand"  btnType="outlined" size="small" iconOnly onClick={onClick}>
    <FontAwesomeIcon icon={faTag} />
  </Button> &nbsp;
  <br />
  <br />
  <Button type="warning" btnShape="circle" size="large" iconOnly onClick={onClick}>
    <FontAwesomeIcon icon={faTag} />
  </Button> &nbsp;
  <Button type="warning" btnShape="square" size="large" iconOnly onClick={onClick}>
    <FontAwesomeIcon icon={faTag} />
  </Button> &nbsp;
  <Button type="warning" btnShape="pill" size="large" iconOnly onClick={onClick}>
    <FontAwesomeIcon icon={faTag} />
  </Button> &nbsp;
</>;
```

<API></API>

[HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type)

