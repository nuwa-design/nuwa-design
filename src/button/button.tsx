import * as React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import { IButtonProps, BtnTypeArr, BtnShapeArr, BtnHtmlTypeArr } from './interface';
import { ThemeColorArr, ElementSizeArr } from '../common/types';
import { SizeMap } from '../common/configs';
import { getGlobalStyleConfig } from '../common/utils';

const { btnPrefix, nuwaPrefix } = getGlobalStyleConfig();

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
    customTag,
    className,
    children,
    onClick,
  } = props;

  if (!customTag) {
    console.error(`unreachable customTag:${customTag}`);
    return null;
  }

  const realSize =
    typeof size === 'string' ? SizeMap[size] : console.error(`unreachable size:${size}`);

  const innerCls: string = classNames(btnPrefix, {
    [`${btnPrefix}-${btnType && btnType === 'outlined' ? `${btnType}-` : ''}${type}`]:
      type && ThemeColorArr.includes(type),
    [`${btnPrefix}-${btnType === 'outlined' ? `${btnType}-` : ''}hover-${hoverType}`]:
      hoverType && ThemeColorArr.includes(hoverType),
    [`${btnPrefix}-${btnShape}`]:
      btnShape && BtnShapeArr.includes(btnShape) && btnShape !== 'round',
    [`${btnPrefix}-${realSize}`]:
      size && ElementSizeArr.includes(size) && size !== 'medium' && realSize,
    [`${btnPrefix}-link`]: btnType === 'link',
    [`${btnPrefix}-icon`]: iconOnly,
    [`${nuwaPrefix}-block`]: block,
    disabled: disabled && !active,
    active: active && !disabled,
  });

  return React.createElement(
    customTag,
    {
      type: htmlType,
      className: classNames(innerCls, className),
      onClick: (!disabled && onClick) || undefined,
    },
    children,
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
  customTag: propTypes.string,
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
  customTag: 'button',
};

export default Button;
