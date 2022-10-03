import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [deck, setDeck] = useState([]);
  const [playerOne, setPlayerOne] = useState([]);
  const [playerTwo, setPlayerTwo] = useState([]);
  const [playerThree, setPlayerThree] = useState([]);
  

  return (
    <GameContext.Provider value={{ deck, setDeck }}>
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('useGameContext must be used within GameProvider');
  }

  return context;
};

export { GameProvider, useGameContext };