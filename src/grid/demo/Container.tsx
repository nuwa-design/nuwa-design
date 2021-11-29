/**
 * @FileName src/grid/demo/Container.tsx
 * @Description Grid Demo
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/29 14:18:58
 */
import * as React from 'react';
import classNames from 'classnames';
import './container.less';

interface IContainerProps {
  bgColor?: 'dark' | 'light';
}

const Container: React.FC<IContainerProps> = props => {
  const { bgColor, children } = props;

  const innerCls = classNames('nuwa-grid-container', {
    [`bg-purple-${bgColor}`]: bgColor,
  });
  return <div className={innerCls}>{children}</div>;
};

export default Container;
