/**
 * @FileName src/progress/progress.tsx
 * @Description Progress Component
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/12/2 22:55:11
 */

import React, { useCallback, useMemo } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import { IBarProps, IProgressProps } from './interface';
import { getGlobalStyleConfig } from '../common/utils';
import { ElementSizeArr, ThemeColorArr } from '../common/types';
import { SizeMap } from '../common/configs';

const { progressPrefix, nuwaPrefix } = getGlobalStyleConfig();

const Bar: React.FC<IBarProps> = (props: IBarProps) => {
  const { type, format, percent, striped, animated, className, onClick } = props;
  const innerBarCls = classNames(`${progressPrefix}-progress-bar`, {
    [`${nuwaPrefix}-bg-${type}`]: type && ThemeColorArr.includes(type),
    [`${progressPrefix}-progress-bar-striped`]: striped || animated,
    [`${progressPrefix}-progress-bar-animated`]: animated,
  });
  const innerStyle = { width: `${percent}%` };

  const formatFun = useCallback(() => {
    if (format && typeof format === 'function' && typeof percent === 'number') {
      return format(percent);
    }

    return null;
  }, [format, percent]);

  return (
    <div className={classNames(innerBarCls, className)} onClick={onClick} style={innerStyle}>
      {formatFun()}
    </div>
  );
};

const Progress: React.FC<IProgressProps> = (props: IProgressProps) => {
  const { height, type, percent, bars, striped, animated, key, className, format, onClick } = props;

  const customHeight = useMemo(() => {
    if (typeof height === 'number') return `${height}px`;
    if (height && ElementSizeArr.includes(height)) return SizeMap[height];
    return height;
  }, [height]);

  const innerProgressCls = classNames(`${progressPrefix}-progress`, {
    [`${progressPrefix}-${customHeight}`]:
      customHeight && typeof height === 'string' && ElementSizeArr.includes(height),
  });
  const mergedBars = useMemo(() => {
    if (!Array.isArray(bars) || bars.length === 0) {
      return [{ type, percent, format, striped, animated, key: key || 0 }];
    }
    return bars.map((bar, index) => ({
      type: (bar && bar.type) || type,
      percent: (bar && bar.percent) || percent,
      striped: (bar && bar.striped) || striped,
      animated: (bar && bar.animated) || animated,
      format: (bar && bar.format) || format,
      key: (bar && bar.key) || index,
    }));
  }, [type, percent, striped, animated, format, bars]);

  const innerStyle = useMemo(
    () => ({
      ...(customHeight ? { height: customHeight } : {}),
    }),
    [customHeight],
  );

  return (
    <div className={classNames(innerProgressCls, className)} style={innerStyle} onClick={onClick}>
      {mergedBars.map((bar: IBarProps) => (
        <Bar {...bar} key={bar.key} />
      ))}
    </div>
  );
};

Progress.propTypes = {
  height: propTypes.oneOfType([propTypes.number, propTypes.string]),
  type: propTypes.oneOf(ThemeColorArr),
  percent: propTypes.number,
  striped: propTypes.bool,
  animated: propTypes.bool,
  bars: propTypes.array,
};

Progress.defaultProps = {
  striped: false,
  animated: false,
};

export default Progress;
