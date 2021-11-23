/**
 * @FileName src/components/Button/Button.tsx
 * @Description 按钮组件 - Core
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/21 21:45:48
 */
import * as React from 'react';
import classNames from 'classnames';
import { ICommonProps } from '@interfaces/ICommonProps';
import { ThemeColor } from '@type/index';
import './style/index.less';

export type BtnType = 'basic' | 'outlined' | 'square' | 'text';

export type BtnSize = 'large' | 'small' | 'medium';

export type BtnHtmlType = 'button' | 'submit' | 'reset';

export type BtnShape = 'round' | 'square' | 'circle' | 'pill';

export interface IButtonProps extends ICommonProps {
  /** 设置按钮样式类型 */
  type?: ThemeColor;
  /** 设置按钮悬停时样式类型 */
  hoverType?: ThemeColor;
  /** 设置按钮形状 */
  btnShape?: BtnShape;
  /** 设置按钮行为类型 */
  btnType?: BtnType;
  /** 设置按钮原生类型，可选值请参考 HTML 标准 */
  htmlType?: BtnHtmlType;
  /** 设置按钮大小 */
  size?: BtnSize;
  /** 是否显示为块状布局 */
  block?: boolean;
  /** 是否显示为禁用状态 */
  disabled?: boolean;
  /** 是否显示为加载状态 */
  loading?: boolean;
  /** 按钮点击事件, event: 点击响应事件 */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
  const { type, hoverType, btnType, btnShape, htmlType, size, block, loading, className, children, onClick } = props;

  const innerCls: string = classNames(
    'nuwa_btn',
    {
      [`nuwa_btn-${btnType !== 'basic' ? `${btnType}-` : ``}${type}`]: type,
      [`nuwa_btn-${btnType !== 'basic' ? `${btnType}-` : ``}hover-${hoverType}`]: hoverType,
      [`nuwa_btn-${btnShape}`]: btnShape !== 'round',
      [`nuwa_btn-${size}`]: size,
      [`nuwa_btn-loading`]: loading,
    },
    `nuwa_btn-${block ? 'block' : 'inline'}`,
  );

  return (
    <button type={htmlType} className={classNames(innerCls, className)} onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'primary',
  btnType: 'basic',
  btnShape: 'round',
  htmlType: 'button',
  size: 'medium',
  block: false,
  disabled: false,
  loading: false,
};

export default Button;
