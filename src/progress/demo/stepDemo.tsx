/**
 * @FileName src/progress/demo/stepDemo.tsx
 * @Description
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/12/4 19:03:34
 */
import React, { useEffect, useState } from 'react';
// @ts-ignore
import { Progress } from 'nuwa-design';

const StepDemo: React.FC = () => {
  const [option, setOption] = useState<{ type: 'plus' | 'minus'; percent: number }>({
    type: 'plus',
    percent: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const { type, percent } = option;
      let next = { ...option };
      if (type === 'plus' && percent === 100) {
        next.percent = 99;
        next.type = 'minus';
      } else if (type === 'minus' && percent === 0) {
        next.percent = 1;
        next.type = 'plus';
      } else next = { type, percent: type === 'plus' ? percent + 1 : percent - 1 };
      setOption(next);
      clearTimeout(timer);
    }, 100);
  }, [option]);

  return (
    <Progress percent={option.percent} type="success" format={(percent: number) => `${percent}%`} />
  );
};

export default StepDemo;
