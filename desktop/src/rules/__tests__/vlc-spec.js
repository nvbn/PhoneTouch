import vlc from '../vlc';

test('When not vlc', () => {
  expect(vlc({window: {title: 'test'}})).toBeFalsy();
});

test('When vlc', () => {
  expect(vlc({window: {title: 'Shameless US S07E09 - VLC media player'}})).toBeTruthy();
});
