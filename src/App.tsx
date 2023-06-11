import styled from 'styled-components';

import { Timer, Score } from 'components';

import { color } from 'constants/common';

const Layout = styled.div`
  background-color: ${color.bg};
  min-height: 100vh;
  height: 100%;
  padding: 30px 0;
  text-align: center;
`;

const Title = styled.h1`
  color: ${color.white};
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 60px;
`;

export default function App() {
  return (
    <Layout>
      <Title>Pomodoro</Title>
      <Timer />
      <Score />
    </Layout>
  );
}
