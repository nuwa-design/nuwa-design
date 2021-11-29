/**
 * @FileName src/grid/col.tsx
 * @Description
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/28 00:14:15
 */
import React from 'react';
import classNames from 'classnames';
import { IColProps, IColumn } from './interface';
import { getGlobalStyleConfig } from '../common/utils';

const { gridPrefix } = getGlobalStyleConfig();

const Col: React.FC<IColProps> = (props: IColProps) => {
  const { range, offset, push, pull, className, children } = props;
  const dynamicCls: string[] = [];

  if (range) {
    if (typeof range === 'number') {
      dynamicCls.push(`${gridPrefix}-col-all-${range}`);
    } else {
      (Object.keys(range) as (keyof IColumn)[]).forEach(item => {
        dynamicCls.push(`${gridPrefix}-col-${item}-${range[item]}`);
      });
    }
  }

  if (offset) {
    if (typeof offset === 'number') {
      dynamicCls.push(`${gridPrefix}-col-all-offset-${offset}`);
    } else {
      (Object.keys(offset) as (keyof IColumn)[]).forEach(item => {
        dynamicCls.push(`${gridPrefix}-col-${item}-offset-${offset[item]}`);
      });
    }
  }

  if (push) {
    if (typeof push === 'number') {
      dynamicCls.push(`${gridPrefix}-col-all-push-${push}`);
    } else {
      (Object.keys(push) as (keyof IColumn)[]).forEach(item => {
        dynamicCls.push(`${gridPrefix}-col-${item}-push-${push[item]}`);
      });
    }
  }

  if (pull) {
    if (typeof pull === 'number') {
      dynamicCls.push(`${gridPrefix}-col-all-pull-${pull}`);
    } else {
      (Object.keys(pull) as (keyof IColumn)[]).forEach(item => {
        dynamicCls.push(`${gridPrefix}-col-${item}-pull-${pull[item]}`);
      });
    }
  }

  const innerCls = classNames(dynamicCls);

  return <div className={classNames(innerCls, className)}>{children}</div>;
};

Col.propTypes = {};

Col.defaultProps = {};

export default Col;
