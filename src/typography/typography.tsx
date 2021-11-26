/**
 * @FileName src/typography/typography.tsx
 * @Description
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/26 18:12:04
 */

import * as React from 'react';
import { ITypographyProps } from './interface';
import Base from './base';

const Typography: React.FC<ITypographyProps> = (props: ITypographyProps) => <Base {...props} />;

export default Typography;
