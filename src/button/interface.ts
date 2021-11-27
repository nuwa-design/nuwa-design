/**
 * @FileName src/button/interface.ts
 * @Description Button interface
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/26 16:04:34
 */

import { ICommonProps } from '../common/interfaces';
import { ThemeColor, ElementSize } from '../common/types';

export const BtnTypeArr = ['basic', 'outlined', 'link'] as const;
export const BtnHtmlTypeArr = ['button', 'submit', 'reset'] as const;
export const BtnShapeArr = ['round', 'square', 'circle', 'pill'] as const;

export type BtnType = typeof BtnTypeArr[number];
export type BtnHtmlType = typeof BtnHtmlTypeArr[number];
export type BtnShape = typeof BtnShapeArr[number];

export interface IButtonProps extends ICommonProps {
  /** 设置按钮样式类型 */
  type?: ThemeColor;
  /** 设置按钮悬停时样式类型 */
  hoverType?: ThemeColor;
  /** 设置按钮形状 */
  btnShape?: BtnShape;
  /** 设置按钮行为类型 */
  btnType?: BtnType;
  /** 设置按钮原生类型，可选值请参考 HTML 标准 */
  htmlType?: BtnHtmlType;
  /** 设置按钮大小 */
  size?: ElementSize;
  /** 是否显示为块状布局 */
  block?: boolean;
  /** 是否显示为禁用状态，与激活状态二选一 */
  disabled?: boolean;
  /** 是否显示为激活状态，与禁用状态二选一 */
  active?: boolean;
  /** 是否显示为仅图标按钮 */
  iconOnly?: boolean;
  /** 希望渲染的元素标签 */
  customTag?: string;
}
