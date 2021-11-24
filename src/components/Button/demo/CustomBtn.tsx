/**
 * title: 个性化定制
 * description: 按钮样式不够满意？不妨定制一个 `个性化` 按钮吧，多种 `色彩` 、 `尺寸`、 `形状` 等搭配供您选择，快来试试！
 */
/**
 * @FileName src/components/Button/demo/CustomBtn.tsx
 * @Description Custom Button Demo
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/24 14:12:06
 */
import React, { useMemo, useState } from 'react';
import Select from 'react-select';
// @ts-ignore
import { Button, IButtonProps } from 'nuwa-design';
// @ts-ignore
import { BtnType, BtnShape, ThemeColor, ElementSize } from 'nuwa-design/cjs/types';
import ReactJson from 'react-json-view';
import './customBtn.less';

interface IOption {
  label: string;
  value: string;
}

const TypeOptions = [
  { value: 'primary', label: 'Primary' },
  { value: 'secondary', label: 'Secondary' },
  { value: 'info', label: 'Info' },
  { value: 'success', label: 'Success' },
  { value: 'warning', label: 'Warning' },
  { value: 'danger', label: 'Danger' },
];

const BtnTypeOptions = [
  { value: 'basic', label: '常规' },
  { value: 'outlined', label: '线框' },
  { value: 'link', label: '文本' },
];

const BtnShapeOptions = [
  { value: 'round', label: '常规' },
  { value: 'square', label: '直角' },
  { value: 'circle', label: '圆形' },
  { value: 'pill', label: '扁平' },
];

const BtnSizeOptions = [
  { value: 'medium', label: '常规' },
  { value: 'large', label: '较大' },
  { value: 'small', label: '较小' },
];

const BtnStatusOptions = [
  { value: '', label: '常规' },
  { value: 'disabled', label: '禁用' },
  { value: 'active', label: '激活' },
];

const BtnBlockOptions = [
  { value: 'inline', label: '行内布局' },
  { value: 'block', label: '块状布局' },
];

const CustomBtn = () => {
  const [type, setType] = useState<IOption>(TypeOptions[0]);
  const [btnType, setBtnType] = useState<IOption>(BtnTypeOptions[0]);
  const [btnShape, setBtnShape] = useState<IOption>(BtnShapeOptions[0]);
  const [btnSize, setBtnSize] = useState<IOption>(BtnSizeOptions[0]);
  const [btnHoverType, setBtnHoverType] = useState<IOption>(TypeOptions[0]);
  const [btnStatus, setBtnStatus] = useState<IOption>(BtnStatusOptions[0]);
  const [btnBlock, setBtnBlock] = useState<IOption>(BtnBlockOptions[0]);

  const props: IButtonProps = useMemo(
    () => ({
      type: type?.value as ThemeColor,
      btnType: btnType?.value as BtnType,
      btnShape: btnShape?.value as BtnShape,
      size: btnSize?.value as ElementSize,
      hoverType: btnHoverType?.value as ThemeColor,
      ...(btnStatus.value !== '' ? { [btnStatus.value]: btnStatus.value } : {}),
      block: btnBlock.value === 'block',
    }),
    [btnType, type, btnShape, btnSize, btnHoverType, btnStatus, btnBlock],
  );

  return (
    <div className="nuwa_demo-btn-custom">
      <div className="nuwa_demo-btn-custom-panel">
        <div className="nuwa_demo-btn-custom-panel-item">
          <span>按钮样式：</span>
          <Select value={type} onChange={(e) => e && setType(e)} options={TypeOptions} />
        </div>
        <div className="nuwa_demo-btn-custom-panel-item">
          <span>按钮形状：</span>
          <Select
            value={btnShape}
            onChange={(e) => e && setBtnShape(e)}
            options={BtnShapeOptions}
          />
        </div>
        <div className="nuwa_demo-btn-custom-panel-item">
          <span>按钮行为：</span>
          <Select value={btnType} onChange={(e) => e && setBtnType(e)} options={BtnTypeOptions} />
        </div>
        <div className="nuwa_demo-btn-custom-panel-item">
          <span>按钮尺寸：</span>
          <Select value={btnSize} onChange={(e) => e && setBtnSize(e)} options={BtnSizeOptions} />
        </div>
        <div className="nuwa_demo-btn-custom-panel-item">
          <span>按钮 Hover 样式：</span>
          <Select
            value={btnHoverType}
            onChange={(e) => e && setBtnHoverType(e)}
            options={TypeOptions}
          />
        </div>
        <div className="nuwa_demo-btn-custom-panel-item">
          <span>按钮状态：</span>
          <Select
            value={btnStatus}
            onChange={(e) => e && setBtnStatus(e)}
            options={BtnStatusOptions}
          />
        </div>
        <div className="nuwa_demo-btn-custom-panel-item">
          <span>布局方式：</span>
          <Select
            value={btnBlock}
            onChange={(e) => e && setBtnBlock(e)}
            options={BtnBlockOptions}
          />
        </div>
      </div>
      <div className="nuwa_demo-btn-custom-btn">
        <Button {...props}>示例按钮</Button>
      </div>
      <div className="nuwa_demo-btn-custom-json">
        <ReactJson src={props} name="props" displayDataTypes={false} />
      </div>
    </div>
  );
};

export default CustomBtn;
