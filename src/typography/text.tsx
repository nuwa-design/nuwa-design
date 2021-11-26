/**
 * @FileName src/typography/text.tsx
 * @Description
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/26 18:10:00
 */
import * as React from 'react';
import Base from './base';
import { ITextProps } from './interface';

const Text: React.FC<ITextProps> = (props: ITextProps) => {
  const { customTag } = props;

  return <Base {...props} customTag={customTag} />;
};

Text.defaultProps = {
  customTag: 'span',
};

export default Text;
