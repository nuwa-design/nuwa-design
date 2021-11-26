import { ICommonProps } from '../common/interfaces';
import { ThemeColor } from '../common/types';

export const WeightTypeArr = ['regular', 'bold', 'bolder', 'boldest'] as const;
export type WeightType = typeof WeightTypeArr[number];

export const TransformTypeArr = ['initial', 'capitalize', 'lowercase', 'uppercase'] as const;
export type TransformType = typeof TransformTypeArr[number];

export const TitleTagNameTypeArr = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'H1',
  'H2',
  'H3',
  'H4',
  'H5',
  'H6',
] as const;
export type ITitleTagNameType = typeof TitleTagNameTypeArr[number];

export const LinkCustomTagTypeArr = ['A', 'a'] as const;
export type ILinkCustomTagType = typeof LinkCustomTagTypeArr[number];

export const TextCustomTagTypeArr = ['SPAN', 'P', 'DIV', 'span', 'p', 'div'] as const;
export type ITextCustomTagType = typeof TextCustomTagTypeArr[number];

export interface IBaseProps extends ICommonProps {
  /** 排版样式 */
  type?: ThemeColor;
  /** 排版粗细 */
  weight?: WeightType;
  /** 排版变形，支持大写、小写、首字母大写 */
  transform?: TransformType;
  /** 希望渲染的元素标签, 会根据传入的标签智能转换组件 */
  customTag?: string;
}

export interface ITypographyProps extends IBaseProps {
  /** 是否表现为链接形式，仅 Typography 组件生效 */
  isLink?: boolean;
  /** 希望渲染的元素标签, 会根据传入的标签智能转换组件，
   * Link（ a ）、Title（ h1 ~ h6 ）、Text（ p / span / div ）、Typography（ 其他 ）
   */
  customTag?: string;
}

export interface ILinkProps extends IBaseProps {
  /** 希望渲染的元素标签, 链接组件仅支持 'A' */
  customTag?: ILinkCustomTagType;
}

export interface ITextProps extends IBaseProps {
  customTag?: ITextCustomTagType;
}

export interface ITitleProps extends IBaseProps {
  /** 标题层级，支持 h1 ~ h6 */
  customTag: ITitleTagNameType;
}
