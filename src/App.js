import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import styled from 'styled-components'
import Home from './features/Home'
import GameDetails from './features/GameDetails'
import TeamDetails from './features/TeamDetails'

const Body = styled.div`
  padding: 10px;
`

const App = () => {
  return (
    <Body>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/gamedetails/:id" component={GameDetails} />
          <Route path="/teamdetails/:id" component={TeamDetails} />
        </Switch>
      </Router>
    </Body>
  )
}

export default App;
