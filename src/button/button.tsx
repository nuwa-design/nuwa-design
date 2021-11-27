import * as React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import { IButtonProps, BtnTypeArr, BtnShapeArr, BtnHtmlTypeArr } from './interface';
import { ThemeColorArr, ElementSizeArr } from '../common/types';
import { SizeMap } from '../common/configs';
import { getGlobalStyleConfig } from '../common/utils';

const NUWA_PREFIX = getGlobalStyleConfig().nuwaPrefix;

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

  const innerCls: string = classNames(`${NUWA_PREFIX}_btn`, {
    [`${NUWA_PREFIX}_btn-${btnType && btnType === 'outlined' ? `${btnType}-` : ''}${type}`]:
      type && ThemeColorArr.includes(type),
    [`${NUWA_PREFIX}_btn-${btnType === 'outlined' ? `${btnType}-` : ''}hover-${hoverType}`]:
      hoverType && ThemeColorArr.includes(hoverType),
    [`${NUWA_PREFIX}_btn-${btnShape}`]:
      btnShape && BtnShapeArr.includes(btnShape) && btnShape !== 'round',
    [`${NUWA_PREFIX}_btn-${realSize}`]:
      size && ElementSizeArr.includes(size) && size !== 'medium' && realSize,
    [`${NUWA_PREFIX}_btn-link`]: btnType === 'link',
    [`${NUWA_PREFIX}_btn-icon`]: iconOnly,
    [`${NUWA_PREFIX}-block`]: block,
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
