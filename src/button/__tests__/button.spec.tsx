/**
 * @FileName src/components/Button/__test__/button.test.ts
 * @Description Button Component Test Cases
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/20 16:01:57
 */
import React from 'react';
import { mount, render } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import mountTest from '../../../tests/mountTest';
import Button from '../Button';

describe('Button', () => {
  mountTest(Button);
  mountTest(() => <Button type="primary" />);
  mountTest(() => <Button btnType="outlined" />);
  mountTest(() => <Button hoverType="success" />);
  mountTest(() => <Button btnShape="square" />);
  mountTest(() => <Button htmlType="submit" />);
  mountTest(() => <Button size="small" />);
  mountTest(() => <Button block />);
  mountTest(() => <Button active />);
  mountTest(() => <Button disabled />);
  mountTest(() => <Button iconOnly />);
  mountTest(() => <Button customTag="a" />);
  mountTest(() => <Button customTag="div" />);

  it('renders correctly', () => {
    expect(<Button>Follow</Button>).toMatchSnapshot();
  });

  it('mount correctly', () => {
    expect(() => mount(<Button>Follow</Button>)).not.toThrow();
  });

  it('should render empty button without errors', () => {
    const wrapper = mount(
      <Button>
        {null}
        {undefined}
      </Button>,
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('should not clickable when button is disabled', () => {
    const onClick = jest.fn();
    const wrapper = mount(
      <Button disabled onClick={onClick}>
        button
      </Button>,
    );
    wrapper.simulate('click');
    expect(onClick).not.toHaveBeenCalledWith();
  });

  it('should not set error customTag', () => {
    const mockWarn = jest.fn();
    jest.spyOn(console, 'error').mockImplementation(mockWarn);
    render(
      <Button disabled customTag={null as any}>
        button
      </Button>,
    );
    expect(mockWarn).toHaveBeenCalledTimes(1);
    expect(mockWarn.mock.calls[0][0]).toMatch(`unreachable customTag:null`);
  });

  it('warns if size is wrong', () => {
    const mockWarn = jest.fn();
    jest.spyOn(console, 'error').mockImplementation(mockWarn);
    const size = 30;
    render(<Button size={size as any} />);
    expect(mockWarn).toHaveBeenCalledTimes(2);
    expect(mockWarn.mock.calls[1][0]).toMatch(`unreachable size:${size}`);
  });

  it('render icon correctly', () => {
    expect(<Button>Button</Button>).toMatchSnapshot();
    expect(
      <Button>
        <FontAwesomeIcon icon={faTag} />
        Button
      </Button>,
    ).toMatchSnapshot();
    expect(
      <Button>
        Button
        <FontAwesomeIcon icon={faTag} />
      </Button>,
    ).toMatchSnapshot();
    expect(
      <Button>
        <i className="fa fa-tag" />
        Button
      </Button>,
    ).toMatchSnapshot();
    expect(
      <Button>
        Button
        <i className="fa fa-tag" />
      </Button>,
    ).toMatchSnapshot();
    expect(
      <Button iconOnly>
        <i className="fa fa-tag" />
      </Button>,
    ).toMatchSnapshot();
    expect(
      <Button iconOnly>
        <FontAwesomeIcon icon={faTag} />
      </Button>,
    ).toMatchSnapshot();
  });
  it('should not insert space to button', () => {
    const wrapper1 = mount(<Button btnType="link">按钮</Button>);
    expect(wrapper1.text()).toBe('按钮');
    const wrapper2 = mount(<Button btnType="outlined">按钮</Button>);
    expect(wrapper2.text()).toBe('按钮');
    const wrapper3 = mount(<Button>按钮</Button>);
    expect(wrapper3.text()).toBe('按钮');
  });
  it('should handle fragment as children', () => {
    const wrapper = mount(
      <Button>
        <>text</>
      </Button>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
