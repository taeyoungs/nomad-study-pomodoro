import { useInterval } from 'usehooks-ts';
import styled from 'styled-components';
import { PlayIcon, PauseIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';

import useTimer from 'recoil/timer/useTimer';
import { color, DELAY } from 'constants/common';
import { addLeadingZero } from 'utils/common';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 80px;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 0 0 80px;
`;

const Card = styled(motion.div)`
  border-radius: 10px;
  background-color: ${color.white};
  width: 200px;
  height: 300px;
  color: ${color.bg};
  font-size: 100px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`;

const DotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Dot = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50px;
  width: 10px;
  height: 10px;
`;

const Button = styled(motion.button)`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

function Timer() {
  const { timer, updateTimer, toggleTimer, stopTimer } = useTimer();

  const { min, sec, time, isPlaying } = timer;

  useInterval(
    () => {
      if (time === 0) {
        stopTimer();
        return;
      }

      updateTimer(time - 1);
    },
    isPlaying ? DELAY : null
  );

  return (
    <Container>
      <CardWrapper>
        <Card key={min} animate={{ scale: [0.7, 1.1, 1], opacity: [0.5, 1] }}>
          {addLeadingZero(min)}
        </Card>
        <DotWrapper>
          <Dot />
          <Dot />
        </DotWrapper>
        <Card key={sec} animate={{ scale: [0.7, 1.1, 1], opacity: [0.5, 1] }}>
          {addLeadingZero(sec)}
        </Card>
      </CardWrapper>
      <Button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} onClick={toggleTimer}>
        {isPlaying ? (
          <PauseIcon width={60} height={60} color="#fff" />
        ) : (
          <PlayIcon width={60} height={60} color="#fff" />
        )}
      </Button>
    </Container>
  );
}

export default Timer;
