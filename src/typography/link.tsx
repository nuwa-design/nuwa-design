/**
 * @FileName src/typography/link.tsx
 * @Description
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/26 18:08:43
 */
import * as React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';
import Base from './base';
import { ILinkProps, TransformTypeArr, WeightTypeArr } from './interface';
import { ThemeColorArr } from '../common/types';
import { getGlobalStyleConfig } from '../common/utils';

const { linkPrefix } = getGlobalStyleConfig();

const Link: React.FC<ILinkProps> = (props: ILinkProps) => {
  const { customTag, type, className } = props;
  if (customTag && customTag.toLowerCase() === 'a') {
    const targetClassName = classNames(
      `${linkPrefix}`,
      {
        [`${linkPrefix}-${type}`]: type && ThemeColorArr.includes(type),
      },
      className,
    );
    return <Base {...props} customTag={customTag} className={targetClassName} type={undefined} />;
  }
  console.error(
    'Link customTag can only choose: "A" as tagName, other tagName please use Typography!',
  );
  return null;
};

Link.propTypes = {
  type: propTypes.oneOf(ThemeColorArr),
  weight: propTypes.oneOf(WeightTypeArr),
  transform: propTypes.oneOf(TransformTypeArr),
  customTag: propTypes.oneOf(['A']),
};

Link.defaultProps = {
  customTag: 'A',
  weight: 'regular',
};

export default Link;
