/* eslint-disable import/no-extraneous-dependencies */
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

export default (Element, props = {}) => shallow(<Element {...props} />);
