import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import ContactMe from './views/contact-me'
import Portfolio from './views/portfolio'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={ContactMe} exact path="/contact-me" />
        <Route component={Portfolio} exact path="/portfolio" />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
