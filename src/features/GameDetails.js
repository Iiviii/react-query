import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import Logo from '../logo.png'
import { Card, Title, Dflex } from '../components/GameCard'
import styled from 'styled-components'

export const LogoLink = styled.img`
  width: 70px;
`
const Score = styled.p`
  color: #ff8940;
  font-size: 18px;
`

const GameDetails = ({ match }) => {
  const fetchGame = async () => {
    const res = await fetch(
      `https://www.balldontlie.io/api/v1/games/${match.params.id}`
    )
    return res.json()
  }
  const { data, status } = useQuery('game', fetchGame)

  return (
    <div>
      {status === 'loading' && <Card>loading...</Card>}
      {status === 'error' && <Card>error</Card>}
      {status === 'success' && (
        <Card>
          <Link to='/'>
            <LogoLink src={Logo} alt='logo' />
          </Link>
          <h2>
            {data.season} {data.status}
          </h2>
          <p>Date: ( {data.date} )</p>
          <Dflex>
            <Title>{data.home_team.full_name}</Title>
            <p>vs</p>
            <Title>{data.visitor_team.full_name}</Title>
          </Dflex>
          <Dflex>
            <Score>{data.home_team_score}</Score>
            <Score>{data.visitor_team_score}</Score>
          </Dflex>
        </Card>
      )}
    </div>
  )
}

export default GameDetails
