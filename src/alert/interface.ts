/**
 * @FileName src/alert/interface.ts
 * @Description Alert interface
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/12/9 19:26:37
 */
import { ICommonProps } from '../common/interfaces';
import { ThemeColor } from '../common/types';

export interface IAlertProps extends ICommonProps {
  /** 文字类型 */
  type?: ThemeColor;
}
