/**
 * @FileName src/common/types/index.ts
 * @Description 组件库公共类型
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/26 16:00:00
 */

// 通用主题配置类型
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

// 通用尺寸配置类型
export const ElementSizeArr = ['medium', 'small', 'large'];

export type ThemeColor = typeof ThemeColorArr[number];

export type ElementSize = typeof ElementSizeArr[number];
