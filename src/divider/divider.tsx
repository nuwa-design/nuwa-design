/**
 * @FileName src/divider/divider.tsx
 * @Description Divider Component
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/27 18:04:15
 */

import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import { IDividerProps } from './interface';
import { getGlobalStyleConfig } from '../common/utils';
import { AlignArr, ElementSizeArr, ThemeColorArr } from '../common/types';
import { SizeMap } from '../common/configs';

const { dividerPrefix } = getGlobalStyleConfig();

const Divider: React.FC<IDividerProps> = (props: IDividerProps) => {
  const { textPadding, type, align, className, onClick, children } = props;

  const realSize =
    typeof textPadding === 'string'
      ? SizeMap[textPadding]
      : console.error(`unreachable textPadding:${textPadding}`);

  const innerCls = classNames(dividerPrefix, {
    [`${dividerPrefix}-${align}`]: align && AlignArr.includes(align),
  });

  const innerTextCls = classNames({
    [`${dividerPrefix}-text-${realSize}`]: textPadding && ElementSizeArr.includes(textPadding),
    [`${dividerPrefix}-text-${type}`]: type && ThemeColorArr.includes(type),
  });

  return (
    <div className={classNames(innerCls, className)} onClick={onClick}>
      <span />
      {children && <span className={innerTextCls}>{children}</span>}
      <span />
    </div>
  );
};

Divider.propTypes = {
  type: propTypes.oneOf(ThemeColorArr),
  textPadding: propTypes.oneOf(ElementSizeArr),
  align: propTypes.oneOf(AlignArr),
};

Divider.defaultProps = {
  align: 'center',
  textPadding: 'medium',
};

export default Divider;
