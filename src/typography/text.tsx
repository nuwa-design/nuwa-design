/**
 * @FileName src/typography/text.tsx
 * @Description
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/26 18:10:00
 */
import * as React from 'react';
import propTypes from 'prop-types';
import Base from './base';
import { ITextProps, TextCustomTagTypeArr, TransformTypeArr, WeightTypeArr } from './interface';
import { ThemeColorArr } from '../common/types';

const Text: React.FC<ITextProps> = (props: ITextProps) => {
  const { customTag } = props;
  if (customTag && TextCustomTagTypeArr.includes(customTag)) {
    return <Base {...props} />;
  }
  console.error(
    'Text customTag can only choose: "DIV" / "SPAN" / "P" as tagName ,other tagName please use Typography!',
  );
  return null;
};

Text.propTypes = {
  type: propTypes.oneOf(ThemeColorArr),
  weight: propTypes.oneOf(WeightTypeArr),
  transform: propTypes.oneOf(TransformTypeArr),
  customTag: propTypes.oneOf(TextCustomTagTypeArr),
};

Text.defaultProps = {
  customTag: 'SPAN',
  weight: 'regular',
};

export default Text;
