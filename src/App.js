import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import './App.css'

import HomePage from './pages/homepage/homepage.component'

const HatsPage = () => (
  <div>
    <Link to='/topics'>Topics</Link>
    <h1>
      Hats page{' '}
      <span role='img' aria-label='hat'>
        🤠
      </span>
    </h1>
  </div>
)

const TopicDetail = props => (
  <div>
    <h1>Topic Detail page</h1>
    <h2>{props.match.params.topicId}</h2>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
        <Route path='/topics/:topicId' component={TopicDetail} />
      </Switch>
    </div>
  )
}

export default App
