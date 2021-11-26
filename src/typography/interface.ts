import Text from './text';
import Title from './title';
import Link from './link';
import { ICommonProps } from '../common/interfaces';
import { ThemeColor } from '../common/types';

export const WeightTypeArr = ['regular', 'bold', 'bolder', 'boldest'] as const;

export type WeightType = typeof WeightTypeArr[number];

export const TransformTypeArr = ['initial', 'capitalize', 'lowercase', 'uppercase'] as const;

export type TransformType = typeof TransformTypeArr[number];

export const LevelTypeArr = [1, 2, 3, 4, 5, 6] as const;

export type LevelType = typeof LevelTypeArr[number];

export interface IBaseProps extends ICommonProps {
  /** 排版样式 */
  type?: ThemeColor;
  /** 排版粗细 */
  weight?: WeightType;
  /** 排版变形，支持大写、小写、首字母大写 */
  transform?: TransformType;
  /** 标题层级，该属性将表现为标题形式，Title 组件生效 */
  level?: LevelType;
  /** 是否表现为链接形式，Base 组件生效 */
  isLink?: boolean;
  /** 希望渲染的元素标签, 会根据传入的标签智能转换组件 */
  customTag?: string;
}

export interface ITypographyProps extends IBaseProps {
  name?: string;
}

export type IChildComponentProps = {
  Text: typeof Text;
  Link: typeof Link;
  Title: typeof Title;
};

export interface ILinkProps extends IBaseProps {
  name: string;
  /* anything */
}

export interface ITextProps extends IBaseProps {
  name: string;
  /* anything */
}

export interface ITitleProps extends IBaseProps {
  name: string;
  /* anything */
}
