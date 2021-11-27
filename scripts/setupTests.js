/**
 * @FileName scripts/setupTests.js
 * @Description 建立 enzyme 与 jest 的连接
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/20 15:59:00
 */

import 'jest-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
