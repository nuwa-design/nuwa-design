/**
 * @FileName src/progress/interface.ts
 * @Description Progress Interface
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/12/2 22:54:49
 */
import React from 'react';
import { ICommonProps } from '../common/interfaces';
import { ElementSize, ThemeColor } from '../common/types';

export interface IBarProps extends ICommonProps {
  /** 进度条项当前百分比 */
  percent?: number;
  /** 进度条项类型 */
  type?: ThemeColor;
  /** 进度条是否展示条纹 */
  striped?: boolean;
  /** 进度条是否展示动态条纹 */
  animated?: boolean;
  /**
   * 渲染进度条提示文案
   * @type (percent: number) => React.ReactElement
   */
  format?: (percent: number) => React.ReactElement | string;
  /** 当前索引，仅在 bars 属性中生效 */
  key?: string | number;
}

export interface IProgressProps extends IBarProps {
  /**
   * 进度条高度
   * @type "small" | "medium" | "large" | number | string
   * @default "medium"
   */
  height?: ElementSize | number | string;
  /**
   * 多进度条配置项，传入多个进度条配置对象
   * @type { percent, type, format, key }[]
   * @default []
   */
  bars?: IBarProps[];
}
