import netflix from '../netflix';

test('When not netflix', () => {
  expect(netflix({window: {title: 'test'}})).toBeFalsy();
});

test('When netflix', () => {
  expect(netflix({window: {title: 'Netflix - Google Chrome'}})).toBeTruthy();
});
