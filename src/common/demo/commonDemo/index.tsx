/**
 * @FileName src/common/demo/commonDemo/index.tsx
 * @Description Common Demo
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/12/4 18:45:45
 */
import React from 'react';
import './index.less';

const CommonDemo: React.FC = props => {
  const { children } = props;

  return <div className="nuwa-common-demo">{children}</div>;
};

export default CommonDemo;
