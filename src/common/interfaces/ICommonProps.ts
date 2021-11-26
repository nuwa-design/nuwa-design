/**
 * @FileName src/common/interfaces/ICommonProps.ts
 * @Description 组件通用 Props Interface
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/26 15:58:30
 */
import React from 'react';

export interface ICommonEventProps {
  /** 按钮点击事件, event: 点击响应事件 */
  onClick?: (event: React.MouseEvent) => void;
}

export interface ICommonProps extends ICommonEventProps {
  /** 自定义 className */
  className?: string;
  /** 自定义 children 组件 */
  children?: React.ReactNode;
}
