/**
 * @FileName src/progress/progress.tsx
 * @Description Progress Component
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/12/2 22:55:11
 */

import React from 'react';
import classNames from 'classnames';
import { IProgressProps } from './interface';
import { getGlobalStyleConfig } from '../common/utils';

const { dividerPrefix } = getGlobalStyleConfig();

const Progress: React.FC<IProgressProps> = (props: IProgressProps) => {
  const { children } = props;

  // const innerCls = classNames(dividerPrefix, {});

  return <div>{children}</div>;
};

Progress.propTypes = {};

Progress.defaultProps = {};

export default Progress;
