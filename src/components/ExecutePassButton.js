import React from 'react';
import { useGameContext } from '../context/GameContext';
import Card from './Card';

export default function ExecutePassButton({ passCard }) {
  const { setSelectedCard, selectedCard, to, from, setFrom } = useGameContext();
  
  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} setSelectedCard={setSelectedCard} setFrom={setFrom} /> from{' '}
      {from} to {to}
    </div>
  );
}
