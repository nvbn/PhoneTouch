import player from '../player';

test('Always return controls', () => {
  expect(player()).toBeTruthy();
});
