import { isEqual } from 'lodash';
import controls, { TouchableHighlight, Text, reset, runCallback } from '../controls';

test('JSX with control', () => {
  const callback = jest.fn();
  const jsx = (<TouchableHighlight onPress={callback}>
    <Text style={{width: 100}}>Test</Text>
  </TouchableHighlight>);

  expect(jsx.tag).toBe('TouchableHighlight');
  expect(jsx.props.onPress.callbackId).toBeTruthy();
  expect(isEqual(
    jsx.children,
    [{tag: 'Text', props: {style: {width: 100}}, children: ['Test']}]
  )).toBe(true);
});

test('Run remote callback', () => {
  const callback = jest.fn();
  const jsx = (<TouchableHighlight onPress={callback}></TouchableHighlight>);
  runCallback({args: [12], ...jsx.props.onPress});
  expect(isEqual(callback.mock.calls, [[12]])).toBe(true);
});

test('Reset callbacks', () => {
  const callback = jest.fn();
  const jsx = (<TouchableHighlight onPress={callback}></TouchableHighlight>);
  reset();
  runCallback({args: [12], ...jsx.props.onPress});
  expect(callback.mock.calls.length).toBe(0);
});
