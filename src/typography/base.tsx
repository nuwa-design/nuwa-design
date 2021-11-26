/**
 * @FileName src/typography/base.tsx
 * @Description
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/26 18:03:52
 */

import * as React from 'react';
import classNames from 'classnames';
import { IBaseProps, TransformTypeArr, WeightTypeArr } from './interface';
import { getGlobalStyleConfig } from '../common/utils';
import { ThemeColorArr } from '../common/types';

const { fontPrefix } = getGlobalStyleConfig();

const Base: React.FC<IBaseProps> = (props: IBaseProps) => {
  const { type, weight, customTag, transform, className, children } = props;

  const innerCls: string = classNames({
    [`${fontPrefix}-${weight}`]: weight && WeightTypeArr.includes(weight) && weight !== 'regular',
    [`${fontPrefix}-${type}`]: type && ThemeColorArr.includes(type),
    [`${fontPrefix}-transform-${transform}`]: transform && TransformTypeArr.includes(transform),
  });

  if (!customTag) {
    console.error(`unreachable customTag:${customTag}`);
    return null;
  }

  return React.createElement(
    customTag.toLowerCase(),
    {
      className: classNames(innerCls, className),
    },
    children,
  );
};

export default Base;
