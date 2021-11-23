/**
 * @FileName src/components/Button/Button.tsx
 * @Description 按钮组件 - Core
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/21 21:45:48
 */
import * as React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import { ICommonProps } from '@interfaces/ICommonProps';
import { getGlobalStyleConfig } from '../../utils';
import {
  ThemeColor,
  ElementSize,
  BtnShape,
  BtnType,
  BtnHtmlType,
  ElementSizeArr,
  ThemeColorArr,
  BtnTypeArr,
  BtnHtmlTypeArr,
  BtnShapeArr,
} from '../../types';
import { SizeMap } from '../../configs';
import './style/index.less';

const NUWA_PREFIX = getGlobalStyleConfig().nuwaPrefix;

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
  size?: ElementSize;
  /** 是否显示为块状布局 */
  block?: boolean;
  /** 是否显示为禁用状态 */
  disabled?: boolean;
  /** 是否显示为激活状态 */
  active?: boolean;
  /** 是否显示为仅图标按钮 */
  iconOnly?: boolean;
  /** 按钮点击事件, event: 点击响应事件 */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
  const {
    type,
    hoverType,
    btnType,
    btnShape,
    htmlType,
    size,
    block,
    disabled,
    iconOnly,
    active,
    className,
    children,
    onClick,
  } = props;

  const realSize = typeof size === 'string' ? SizeMap[size] : null;

  const innerCls: string = classNames(
    'nuwa_btn',
    {
      [`${NUWA_PREFIX}_btn-${btnType && btnType === 'outlined' ? `${btnType}-` : ``}${type}`]:
        type && ThemeColorArr.includes(type),
      [`${NUWA_PREFIX}_btn-${btnType !== 'basic' ? `${btnType}-` : ``}hover-${hoverType}`]:
        hoverType && ThemeColorArr.includes(hoverType),
      [`${NUWA_PREFIX}_btn-${btnShape}`]: btnShape && BtnShapeArr.includes(btnShape) && btnShape !== 'round',
      [`${NUWA_PREFIX}_btn-${realSize}`]: size && ElementSizeArr.includes(size) && size !== 'medium' && realSize,
      [`${NUWA_PREFIX}_btn-link`]: btnType === 'link',
      [`${NUWA_PREFIX}_btn-icon`]: iconOnly,
      [`${NUWA_PREFIX}-block`]: block,
      disabled: disabled && !active,
      active: active && !disabled,
    },
  );

  return (
    <button type={htmlType} className={classNames(innerCls, className)} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: propTypes.oneOf(ThemeColorArr),
  hoverType: propTypes.oneOf(ThemeColorArr),
  btnShape: propTypes.oneOf(BtnShapeArr),
  btnType: propTypes.oneOf(BtnTypeArr),
  htmlType: propTypes.oneOf(BtnHtmlTypeArr),
  size: propTypes.oneOf(ElementSizeArr),
  block: propTypes.bool,
  disabled: propTypes.bool,
  active: propTypes.bool,
  iconOnly: propTypes.bool,
  onClick: propTypes.func,
};

Button.defaultProps = {
  type: 'primary',
  btnType: 'basic',
  btnShape: 'round',
  htmlType: 'button',
  size: 'medium',
  block: false,
  disabled: false,
  iconOnly: false,
};

export default Button;
