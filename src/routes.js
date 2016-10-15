import React                           from 'react'
import { IndexRoute, Route, Redirect } from 'react-router'
import App                             from 'components/App'
import Home                            from 'pages/Home'

export default (

  <Route component={App}>
    <IndexRoute path="/" component={Home} />

    <Redirect from="*" to="/" />
  </Route>

)
