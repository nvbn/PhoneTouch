import { isEqual } from 'lodash';
import { subscribe, dataSources } from '../';

test('Notify subscriber only when changed', () => {
  const callback = jest.fn();
  const dataSource = jest.fn();

  while (dataSources.length) {
    dataSources.pop();
  }
  dataSources.push(dataSource);

  subscribe(1000, callback);
  const emit = dataSource.mock.calls[0][1];

  emit({volume: 100});
  expect(isEqual(callback.mock.calls[0][0], {volume: 100})).toBe(true);

  emit({title: 'test'});
  expect(isEqual(callback.mock.calls[1][0], {
    volume: 100,
    title: 'test'
  })).toBe(true);

  emit({
    volume: 100,
    title: 'test'
  });
  expect(callback.mock.calls.length).toBe(2);
});
