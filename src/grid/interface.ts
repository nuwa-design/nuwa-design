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
  all?: number;
};

export interface IColProps extends ICommonProps {
  offset?: IColumn | number;
  range?: IColumn | number;
  push?: IColumn | number;
  pull?: IColumn | number;
}
