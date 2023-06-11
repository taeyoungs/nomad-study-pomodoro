import styled from 'styled-components';

import useScore from 'recoil/score/useScore';
import { color } from 'constants/common';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
`;

const Title = styled.div`
  color: ${color.white};
  font-size: 18px;
  font-weight: 700;
`;

const Content = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 15px;
`;

function Score() {
  const { score } = useScore();
  const { round, goal } = score;

  return (
    <Container>
      <div>
        <Content>{round}/4</Content>
        <Title>ROUND</Title>
      </div>
      <div>
        <Content>{goal}/12</Content>
        <Title>GOAL</Title>
      </div>
    </Container>
  );
}

export default Score;
