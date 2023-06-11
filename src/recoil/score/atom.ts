import { atom } from 'recoil';

import { KEY } from '../recoilKeys';

interface Score {
  round: number;
  goal: number;
}

const scoreAtom = atom<Score>({
  key: KEY.SCORE,
  default: {
    round: 0,
    goal: 0,
  },
});

export default scoreAtom;
