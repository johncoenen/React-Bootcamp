import React, { Component } from react
import {
  Route,
  Link,
  BrowserRouter as Router,
} = 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ( {match} ) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={'{match.url}/rendering'}>Rendering with React</Link>
      </li>
      <li>
        <Link to={'{match.url}/components'}>Components</Link>
      </li>
      <li>
        <Link to={'{match.url}/props-v-state'}>Props vs State</Link>
      </li>
    </ul>

    <Route path='/topics/:topicId'.components={Topic} />
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic</h3>
    )} />
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link t0="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>

          <hr />

// What routes do: if the path matches, then it gets rendered
          <Route exact path='/'.component={Home} /> // need to add exact so that it matches only '/' and not the '/about' or '/topics'
          <Route path='/about'.component={About} />
          <Route path='/topics'.component={Topics} />
        </div>
      </Router>  
    )
  }
}

export default App 