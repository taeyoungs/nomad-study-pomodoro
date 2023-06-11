import { atom } from 'recoil';

import { KEY } from '../recoilKeys';
import { INITIAL_TIMER } from './constants';

interface Timer {
  time: number;
  min: number;
  sec: number;
  isPlaying: boolean;
}

const timerAtom = atom<Timer>({
  key: KEY.TIMER,
  default: INITIAL_TIMER,
});

export default timerAtom;
