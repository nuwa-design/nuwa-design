/**
 * @FileName src/typography/typography.tsx
 * @Description
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/26 18:12:04
 */

import * as React from 'react';
import propTypes from 'prop-types';
import { ThemeColorArr } from '../common/types';
import { ITypographyProps, TransformTypeArr, WeightTypeArr } from './interface';
import Base from './base';

const Typography: React.FC<ITypographyProps> = (props: ITypographyProps) => {
  const { isLink, customTag } = props;
  return <Base {...props} customTag={isLink ? 'a' : customTag} />;
};

Typography.propTypes = {
  type: propTypes.oneOf(ThemeColorArr),
  weight: propTypes.oneOf(WeightTypeArr),
  transform: propTypes.oneOf(TransformTypeArr),
  isLink: propTypes.bool,
  customTag: propTypes.string,
};

Typography.defaultProps = {
  customTag: 'span',
  weight: 'regular',
  isLink: false,
};

export default Typography;
