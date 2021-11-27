/**
 * @FileName tests/mountTest.tsx
 * @Description Test react component mount and unmount
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/24 16:26:30
 */
import React from 'react';
import { mount } from 'enzyme';

export default function mountTest(Component: React.FC<any>, desc?: string) {
  describe(`mount and unmount`, () => {
    it(desc || `component could be updated and unmounted without errors`, () => {
      const wrapper = mount(<Component />);
      expect(() => {
        wrapper.setProps({});
        wrapper.unmount();
      }).not.toThrow();
    });
  });
}
