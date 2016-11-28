import chrome from '../chrome';

test('When not chrome', () => {
  expect(chrome({window: {title: 'test'}})).toBeFalsy();
});

test('When chrome', () => {
  expect(chrome({window: {title: 'test - Google Chrome'}})).toBeTruthy();
});
