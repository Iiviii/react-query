import React from 'react'
import { useQuery } from 'react-query'
import { Link } from "react-router-dom"
import Logo from '../logo.png'
import {Card, Title} from '../components/GameCard'
import styled from 'styled-components'
import { LogoLink } from './GameDetails'

const Details = styled.span`
  color: #ff8940;
  font-size: 20px;
`


const TeamDetails = ({match}) => {
  const fetchTeam = async () => {
    const res = await fetch(`https://www.balldontlie.io/api/v1/teams/${match.params.id}`)
    return res.json()
  } 
  const { data, status } = useQuery('team', fetchTeam)

  return (
    <div>
      <div>
      {status === 'loading' && (
        <div>loading...</div>
      )}
      {status === 'error' && (
        <div>error</div>
      )}
      {status === 'success' && (
        <Card>
          <Link to="/">
            <LogoLink src={Logo} alt="logo" />
          </Link>
          <Title>{data.name}</Title>
          <p>Full name: <Details>{data.full_name}</Details></p>
          <p>City: <Details>{data.city}</Details></p>
          <p>Abbreviation: <Details>"{data.abbreviation}"</Details></p>
          <p>Division: <Details>{data.division}</Details></p>
          <p>Conference: <Details>{data.conference}</Details></p>
        </Card>
      )}
      </div>
    </div>
  )
}

export default TeamDetails