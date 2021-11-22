/**
 * @FileName src/interfaces/ICommonProps.ts
 * @Description
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/21 20:52:59
 */
import React from 'react';

export interface ICommonProps {
  /** 自定义 className */
  className?: string;
  /** 自定义 children 组件 */
  children?: React.ReactNode;
}
