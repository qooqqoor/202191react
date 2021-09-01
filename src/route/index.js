import { Redirect, Route, Switch } from 'react-router'
import React, {lazy, Suspense} from "react";
import LayoutFallback  from "../components/LayoutFallback"
import { withSuspenseRoute } from './withSuspenseRoute'
import  Layout  from '../components/Layout'
import  RouteWrapper  from './RouteWrapper'

const Login =  lazy(()=> import('../pages/Login'))
const Register =  lazy(()=> import('../pages/Register'))

const Homepage =  lazy(()=> import('../pages/Homepage'))


const Routes = (props) => {
  console.log(45546, props)
  return (
    <Switch>
      <Redirect path="/" to="/homepage" exact/>

      <Route
        path={'/login'}
        exact
        component={withSuspenseRoute(Login, LayoutFallback)}
      />
      <Route
        path={'/register'}
        exact
        component={withSuspenseRoute(Register, LayoutFallback)}
      />

      <RouteWrapper
        path={'/homepage'}
        exact
        component={(
          withSuspenseRoute(Homepage,LayoutFallback)
        )}
        name={"首頁"}
        layout={Layout}
      />
    </Switch>
  )
}
export default Routes
