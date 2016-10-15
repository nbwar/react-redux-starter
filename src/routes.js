import React                           from 'react'
import { IndexRoute, Route, Redirect } from 'react-router'
import App                             from 'components/App'
import Home                            from 'pages/Home'

export default (

  <Route path="/" component={App}>
    <IndexRoute component={Home} />

    <Redirect from="*" to="/" />
  </Route>

)
