import styled from 'styled-components'
import StartGame from './components/StartGame';
import { useState } from 'react';
import GamePlay from './components/GamePlay';

function App() {
  const [isGameStardet, setIsGameStared] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStared(pre => !pre);
  };

  return (
    <>
      {
        isGameStardet ? <GamePlay /> : <StartGame 
        toggle = {toggleGamePlay}
        />
      }
    </>
  );
}
export default App;
