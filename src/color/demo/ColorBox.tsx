/**
 * @FileName src/color/demo/ColorBox.tsx
 * @Description ColorBox
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/12/2 15:17:34
 */
import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import './color-box.less';

interface IColorBoxProps {
  style?: CSSProperties;
  className?: string;
  subColors?: string[];
}

const ColorBox: React.FC<IColorBoxProps> = props => {
  const { className, subColors, style, children } = props;

  return (
    <div className={classNames('demo-color-box', className)} style={style}>
      {children}
      <div className="bg-color-sub">
        {subColors &&
          subColors.map(item => (
            <div className={classNames('bg-color-sub-item', item)} key={item} />
          ))}
      </div>
    </div>
  );
};

export default ColorBox;
