/**
 * @FileName src/typography/title.tsx
 * @Description
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/26 18:11:04
 */
import * as React from 'react';
import Base from './base';
import { ITitleProps } from './interface';

const Title: React.FC<ITitleProps> = (props: ITitleProps) => {
  const { customTag } = props;

  return <Base {...props} customTag={customTag} />;
};

Title.defaultProps = {
  customTag: 'span',
};

export default Title;
