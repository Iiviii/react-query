import React from 'react'
import { useQuery } from 'react-query'
import GameCard from './GameCard'
import { Card } from './GameCard'

const fetchGames = async () => {
  const res = await fetch(`https://www.balldontlie.io/api/v1/games`)
  return res.json()
}

const GamesList = () => {
  const { data, status } = useQuery('games', fetchGames)

  return (
    <div>
      {status === 'loading' && <Card>loading...</Card>}
      {status === 'error' && <Card>error</Card>}
      {status === 'success' && (
        <div>
          {data.data
            .map(game => <GameCard key={game.id} game={game} />)
            .slice(0, 10)}
        </div>
      )}
    </div>
  )
}

export default GamesList
