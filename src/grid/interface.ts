/**
 * @FileName src/grid/interface.ts
 * @Description Grid Interface
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/28 00:12:24
 */
import { ICommonProps } from '../common/interfaces';

export interface IGridProps {}

export interface IRowProps extends ICommonProps {}

export type IColumn = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  all?: number;
};

export const BlockArr = ['inline', 'inline-block', 'block'] as const;
export type BlockType = typeof BlockArr[number];

export type IVisible = [keyof IColumn, BlockType];

export interface IColProps extends ICommonProps {
  /** 当前分栏的数量 */
  range?: IColumn | number;
  /** 分栏的偏移量 */
  offset?: IColumn | number;
  /** 分栏的排序：向左排序 */
  push?: IColumn | number;
  /** 分栏的排序：向右排序 */
  pull?: IColumn | number;
  /** 需要隐藏的分栏 */
  hidden?: (keyof IColumn)[];
}
