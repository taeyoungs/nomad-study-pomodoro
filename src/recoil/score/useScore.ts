import { useRecoilState } from 'recoil';

import scoreAtom from './atom';
import { INITIAL_SCORE, MAX_GOAL, MAX_ROUND } from './constants';

function useScore() {
  const [score, setScore] = useRecoilState(scoreAtom);

  const { goal, round } = score;

  const updateScore = () => {
    if (round + 1 !== MAX_ROUND) {
      setScore((prevState) => ({ ...prevState, round: round + 1 }));
      return;
    }

    if (goal + 1 !== MAX_GOAL) {
      setScore((prevState) => ({ ...prevState, goal: goal + 1, round: 0 }));
      return;
    }

    setScore(INITIAL_SCORE);
  };

  return { score, updateScore };
}

export default useScore;
