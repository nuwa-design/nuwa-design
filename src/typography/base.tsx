/**
 * @FileName src/typography/base.tsx
 * @Description
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/26 18:03:52
 */

import * as React from 'react';
import classNames from 'classnames';
import { IBaseProps, LevelTypeArr, TransformTypeArr, WeightTypeArr } from './interface';
import { getGlobalStyleConfig } from '../common/utils';
import { ThemeColorArr } from '../common/types';

const { linkPrefix, fontPrefix, titlePrefix } = getGlobalStyleConfig();

const TotalHeadTagName = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const Base: React.FC<IBaseProps> = (props: IBaseProps) => {
  const { type, weight, level, customTag, transform, isLink, className, children } = props;

  // 是否为标题类型
  const isTitleType = React.useMemo(
    () =>
      (customTag && TotalHeadTagName.includes(customTag)) ||
      (level && LevelTypeArr.includes(level)),
    [customTag, level],
  );

  // 是否为链接类型
  const isLinkType = React.useMemo(() => isLink || customTag === 'a', [isLink, customTag]);

  const innerCls: string = classNames({
    [`${fontPrefix}-${weight}`]: weight && WeightTypeArr.includes(weight) && weight !== 'regular',
    [`${fontPrefix}-${type}`]: !isLinkType && type && ThemeColorArr.includes(type),
    [`${fontPrefix}-transform-${transform}`]: transform && TransformTypeArr.includes(transform),
    [`${titlePrefix}-h${level}`]: level && LevelTypeArr.includes(level),
    [`${linkPrefix}`]: isLinkType && !isTitleType,
    [`${linkPrefix}-${type}`]: isLinkType && !isTitleType && type && ThemeColorArr.includes(type),
  });

  if (!customTag) {
    console.error(`unreachable customTag:${customTag}`);
    return null;
  }

  return React.createElement(
    customTag,
    {
      className: classNames(innerCls, className),
    },
    children,
  );
};

export default Base;
