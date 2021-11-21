/**
 * @FileName src/components/Button/Button.tsx
 * @Description 按钮组件 - Core
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/21 21:45:48
 */
import * as React from 'react';
import classNames from 'classnames';
import { ICommonProps } from '@interfaces/ICommonProps';
import './style/index.less';

export type BtnType = 'contained' | 'outlined' | 'text';

export type BtnSize = 'large' | 'small' | 'medium';

export type BtnHtmlType = 'button' | 'submit' | 'reset';

export interface IButtonProps extends ICommonProps {
  /** 设置按钮类型类型 */
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
  const { btnType, htmlType, size, block, loading, className, children, onClick } = props;

  const innerCls: string = classNames(
    'nuwa-btn',
    {
      [`nuwa_btn-${btnType}`]: btnType,
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
  btnType: 'contained',
  htmlType: 'button',
  size: 'medium',
  block: false,
  disabled: false,
  loading: false,
};

export default Button;
