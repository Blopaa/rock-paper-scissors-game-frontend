import React from 'react'
import {Switch, Route} from "react-router-dom"

import Home from "../pages/Home"
import Online from "../pages/Online"
import Offline from "../pages/Offline"

export default function Routes():JSX.Element {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/online/:gameId/:userId" component={Online}/>
      <Route exact path="/offline/:userId" component={Offline}/>
    </Switch>
  )
}
