/**
 * @FileName src/alert/alert.tsx
 * @Description Alert Component
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/12/9 19:25:05
 */
import React from 'react';
import classNames from 'classnames';
import { IAlertProps } from './interface';
import { getGlobalStyleConfig } from '../common/utils';

const { alertPrefix } = getGlobalStyleConfig();

const Alert: React.FC<IAlertProps> = (props: IAlertProps) => {
  const { className, onClick } = props;

  const innerCls = classNames(`${alertPrefix}-alert`, {});

  return <div className={classNames(innerCls, className)} onClick={onClick} />;
};

Alert.propTypes = {};

Alert.defaultProps = {};

export default Alert;
