import React from 'react'
import { useQuery } from 'react-query'
import GameCard from './GameCard'

const fetchGames = async () => {
  const res = await fetch(`https://www.balldontlie.io/api/v1/games`)
  return res.json()
}

const GamesList = () => {
  const { data, status } = useQuery('games', fetchGames)

  return (
    <div>
      {status === 'loading' && (
        <div>loading...</div>
      )}
      {status === 'error' && (
        <div>error</div>
      )}
      {status === 'success' && (
        <div>{ data.data.map(game => <GameCard key={game.id} game={game} />).slice(0, 10)}</div>
      )}
    </div>
  )
}

export default GamesList