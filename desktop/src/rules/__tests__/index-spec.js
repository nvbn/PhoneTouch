import { isEqual } from 'lodash';
import { getControls, rules } from '../';

test('Get controls', () => {
  while (rules.length) {
    rules.pop();
  }
  rules.push(() => 'test-0');
  rules.push(() => ['test-1', 'test-2']);
  rules.push(() => null);
  rules.push(() => {
    throw Error;
  });

  const controls = getControls();
  expect(isEqual(
    controls,
    ['test-0', 'test-1', 'test-2']
  )).toBe(true);
});
