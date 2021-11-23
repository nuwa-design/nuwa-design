/**
 * @FileName src/configs/index.ts
 * @Description 全局配置入口文件
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/22 15:15:02
 */

export const ThemeColorArr = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'danger',
  'brand',
  'light',
  'dark',
] as const;

export const ElementSizeArr = ['medium', 'small', 'large'];

export type ThemeColor = typeof ThemeColorArr[number];

export type ElementSize = typeof ElementSizeArr[number];

export * from './button';
