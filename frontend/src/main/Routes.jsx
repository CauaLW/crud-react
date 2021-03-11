import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

const Routes = props => 
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/users" component={UserCrud}></Route>
        <Redirect from="*" to="/"></Redirect>
    </Switch>

export default Routes