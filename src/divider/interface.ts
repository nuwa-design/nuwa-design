/**
 * @FileName src/divider/interface.ts
 * @Description Divider interface
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/27 17:51:56
 */
import { ICommonProps } from '../common/interfaces';
import { Align, ElementSize, ThemeColor } from '../common/types';

export interface IDividerProps extends ICommonProps {
  /** 文字类型 */
  type?: ThemeColor;
  /** 文字距离分隔线的间距 */
  textPadding?: ElementSize;
  /** 文本对齐方式 */
  align?: Align;
}
