import React from 'react';
import { useGameContext } from '../context/GameContext';
import CardList from './CardList';

export default function Player({ player, hand }) {
  const { setTo, to } = useGameContext();

  return (
    <div
      className={`player ${to === player ? 'selected-player' : ''}`}
      onClick={() => setTo(player)}
    >
      <p>Player {player}</p>
      <CardList
        player={player}
        cards={hand}
      />
    </div>
  );
}
