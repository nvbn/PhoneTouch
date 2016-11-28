import identity from 'lodash/identity';
import flatten from 'lodash/flatten';
import chrome from './chrome';
import pulseaudio from './pulseaudio';
import idea from './idea';
import player from './player';
import netflix from './netflix';
import vlc from './vlc';

export const rules = [pulseaudio, player, chrome, idea, netflix, vlc];

export const getControls = (data) =>
  flatten(
    rules.map((rule) => {
      try {
        return rule(data);
      } catch (e) {
        console.error(e);
      }
    }).filter(identity));
