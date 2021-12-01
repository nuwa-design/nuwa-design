/**
 * @FileName src/grid/row.tsx
 * @Description
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/28 00:14:05
 */
import React from 'react';
import classNames from 'classnames';
import { IRowProps } from './interface';
import { getGlobalStyleConfig } from '../common/utils';

const { gridPrefix } = getGlobalStyleConfig();

const Row: React.FC<IRowProps> = (props: IRowProps) => {
  const { className, onClick, children } = props;
  const innerCls = classNames(`${gridPrefix}-row`);

  return (
    <div className={classNames(innerCls, className)} onClick={onClick}>
      {children}
    </div>
  );
};

Row.propTypes = {};

Row.defaultProps = {};

export default Row;
