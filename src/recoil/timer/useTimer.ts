import { useRecoilState } from 'recoil';

import { getTimeBySec } from 'utils/common';

import timerAtom from './atom';
import { INITIAL_TIMER } from './constants';

import useScore from '../score/useScore';

function useTimer() {
  const [timer, setTimer] = useRecoilState(timerAtom);
  const { updateScore } = useScore();

  const updateTimer = (newSeconds: number) => {
    const { min, sec } = getTimeBySec(newSeconds);

    if (newSeconds === 0) {
      updateScore();
      setTimer(INITIAL_TIMER);
      return;
    }

    setTimer((prevState) => ({ ...prevState, time: newSeconds, min, sec }));
  };

  const toggleTimer = () => {
    setTimer((prevState) => ({
      ...prevState,
      isPlaying: !prevState.isPlaying,
    }));
  };

  const stopTimer = () => {
    setTimer((prevState) => ({
      ...prevState,
      isPlaying: false,
    }));
  };

  return { timer, updateTimer, toggleTimer, stopTimer };
}

export default useTimer;
