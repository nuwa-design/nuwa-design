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
  /** 当前分栏的数量 */
  range?: Record<IType, number> | number;
  /** 分栏的偏移量 */
  offset?: Record<IType, number> | number;
  /** 分栏的排序：向左排序 */
  push?: Record<IType, number> | number;
  /** 分栏的排序：向右排序 */
  pull?: Record<IType, number> | number;
  /** 需要隐藏的分栏 */
  hidden?: IType[];
  /** 需要可见的分栏 */
  visible?: [IType, BlockType][] | IType[];
}
