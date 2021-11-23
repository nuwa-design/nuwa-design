/**
 * @FileName src/types/button.ts
 * @Description button types
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/23 15:11:38
 */

export const BtnTypeArr = ['basic', 'outlined', 'square', 'link'] as const;
export const BtnHtmlTypeArr = ['button', 'submit', 'reset'] as const;
export const BtnShapeArr = ['round', 'square', 'circle', 'pill'] as const;

export type BtnType = typeof BtnTypeArr[number];
export type BtnHtmlType = typeof BtnHtmlTypeArr[number];
export type BtnShape = typeof BtnShapeArr[number];
