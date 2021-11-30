/**
 * @FileName src/grid/col.tsx
 * @Description
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/28 00:14:15
 */
import React from 'react';
import classNames from 'classnames';
import { BlockArr, BlockType, IColProps, IType, TypeArr } from './interface';
import { getGlobalStyleConfig } from '../common/utils';

const { gridPrefix } = getGlobalStyleConfig();

const Col: React.FC<IColProps> = (props: IColProps) => {
  const { range, offset, push, pull, hidden, visible, className, children, onClick } = props;
  const dynamicCls: string[] = [];

  // Range
  if (range) {
    if (typeof range === 'number') {
      dynamicCls.push(`${gridPrefix}-col-all-${range}`);
    } else {
      (Object.keys(range) as IType[]).forEach(item => {
        dynamicCls.push(`${gridPrefix}-col-${item}-${range[item]}`);
      });
    }
  }

  // Offset
  if (offset) {
    if (typeof offset === 'number') {
      dynamicCls.push(`${gridPrefix}-col-all-offset-${offset}`);
    } else {
      (Object.keys(offset) as IType[]).forEach(item => {
        dynamicCls.push(`${gridPrefix}-col-${item}-offset-${offset[item]}`);
      });
    }
  }

  // Push
  if (push) {
    if (typeof push === 'number') {
      dynamicCls.push(`${gridPrefix}-col-all-push-${push}`);
    } else {
      (Object.keys(push) as IType[]).forEach(item => {
        dynamicCls.push(`${gridPrefix}-col-${item}-push-${push[item]}`);
      });
    }
  }

  // Pull
  if (pull) {
    if (typeof pull === 'number') {
      dynamicCls.push(`${gridPrefix}-col-all-pull-${pull}`);
    } else {
      (Object.keys(pull) as IType[]).forEach(item => {
        dynamicCls.push(`${gridPrefix}-col-${item}-pull-${pull[item]}`);
      });
    }
  }

  // 条件隐藏
  if (Array.isArray(hidden) && hidden.length !== 0) {
    hidden.forEach(hideMode => {
      if (hideMode) {
        dynamicCls.push(`${gridPrefix}-hidden-${hideMode}`);
      }
    });
  }

  // 条件可见
  if (Array.isArray(visible) && visible.length !== 0) {
    visible.forEach((visibleMode: [IType, BlockType] | IType) => {
      if (Array.isArray(visibleMode) && visibleMode.length === 2) {
        const [type, displayType] = visibleMode;
        if (type && displayType && BlockArr.includes(displayType)) {
          dynamicCls.push(`${gridPrefix}-visible-${type}-${displayType}`);
        }
      } else if (typeof visibleMode === 'string' && TypeArr.includes(visibleMode)) {
        dynamicCls.push(`${gridPrefix}-visible-${visibleMode}`);
      }
    });
  }

  // 内部 ClassNames
  const innerCls = classNames(dynamicCls);

  return (
    <div className={classNames(innerCls, className)} onClick={onClick}>
      {children}
    </div>
  );
};

Col.propTypes = {};

Col.defaultProps = {};

export default Col;
