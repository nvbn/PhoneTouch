import idea from '../idea';

test('When not idea', () => {
  expect(idea({window: {title: 'test'}})).toBeFalsy();
});

test('When idea', () => {
  expect(idea({window: {title: 'test - IntelliJ IDEA 2016.3'}})).toBeTruthy();
});
