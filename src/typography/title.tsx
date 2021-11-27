/**
 * @FileName src/typography/title.tsx
 * @Description
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/26 18:11:04
 */
import * as React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';
import Base from './base';
import { ITitleProps, TitleTagNameTypeArr, TransformTypeArr, WeightTypeArr } from './interface';
import { ThemeColorArr } from '../common/types';
import { getGlobalStyleConfig } from '../common/utils';

const { titlePrefix } = getGlobalStyleConfig();

const Title: React.FC<ITitleProps> = (props: ITitleProps) => {
  const { customTag, className } = props;
  if (customTag && TitleTagNameTypeArr.includes(customTag)) {
    // 绑定标题 ClassName
    const targetClassName = classNames(`${titlePrefix}-${customTag.toLowerCase()}`, className);
    return <Base {...props} className={targetClassName} />;
  }
  console.error(
    'Title customTag can only choose: "h1" ~ "h6" as tagName, other tagName please use Typography!',
  );
  return null;
};

Title.propTypes = {
  type: propTypes.oneOf(ThemeColorArr),
  weight: propTypes.oneOf(WeightTypeArr),
  transform: propTypes.oneOf(TransformTypeArr),
  customTag: propTypes.oneOf(TitleTagNameTypeArr).isRequired,
};

Title.defaultProps = {
  weight: 'regular',
};

export default Title;
