/**
 * @FileName src/typography/link.tsx
 * @Description
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/26 18:08:43
 */
import * as React from 'react';
import Base from './base';
import { ILinkProps } from './interface';

const Link: React.FC<ILinkProps> = (props: ILinkProps) => <Base {...props} />;

Link.defaultProps = {
  customTag: 'a',
  isLink: true,
};

export default Link;
