import renderer from 'react-test-renderer';
import Calculator from '../pages/Calculator';
it('renders correctly', () => {
  const tree = renderer
    .create(<Calculator></Calculator>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});