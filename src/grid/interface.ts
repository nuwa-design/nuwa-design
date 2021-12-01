/**
 * @FileName src/grid/interface.ts
 * @Description Grid Interface
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/28 00:12:24
 */
import { ICommonProps } from '../common/interfaces';

export interface IGridProps {}

export interface IRowProps extends ICommonProps {}

export const TypeArr = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;

export type IType = typeof TypeArr[number];

export const BlockArr = ['inline', 'inline-block', 'block'] as const;
export type BlockType = typeof BlockArr[number];

export interface IColProps extends ICommonProps {
  /**
   * @description       当前分栏的数量
   * @default           无
   * @type              ColData 类型，见下文
   */
  range: Record<IType, number> | number;
  /**
   * @description       分栏的偏移量
   * @default           无
   * @type              ColData 类型，见下文
   */
  offset?: Record<IType, number> | number;
  /**
   * @description       分栏的排序：向左排序
   * @default           无
   * @type              ColData 类型，见下文
   */
  push?: Record<IType, number> | number;
  /**
   * @description       分栏的排序：向右排序
   * @default           无
   * @type              ColData 类型，见下文
   */
  pull?: Record<IType, number> | number;
  /**
   * @description       条件隐藏，需要隐藏的分栏，表示在当前屏幕分辨率下需要隐藏该分栏
   * @default           无
   * @type              数组类型，支持 分辨率规则 中一个或多个
   */
  hidden?: IType[];
  /**
   * @description       条件可见，需要显示的分栏，表示在当前屏幕分辨率下需要显示该分栏，与 hidden 不同时使用
   * @default           无
   * @type              ColVisible 类型，见下文
   */
  visible?: [IType, BlockType][] | IType[];
}
