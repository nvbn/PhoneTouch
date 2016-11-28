import pulseaudio from '../pulseaudio';

test('Return controls with current volume', () => {
  const jsx = pulseaudio({volume: 32});
  expect(jsx.children[1].props.value).toBe(32);
});
