import React from 'react'
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import routes from './routes'

const RouteWithSubRoutes = (route) => (
  <Route
    path={route.path}
    render={(props) => (
      <route.component {...props} routes={route.routes} />
    )}
  />
)

export default () => (
  <div className="App">
    <Router>
      <Switch>
        {routes.map((route) => (
          <RouteWithSubRoutes key={route.name} {...route} />
        ))}
      </Switch>
    </Router>
  </div>
)
