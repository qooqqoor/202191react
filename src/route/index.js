import { Redirect, Route, Switch } from 'react-router'
import React, {lazy, Suspense} from "react";
import LayoutFallback  from "../components/LayoutFallback"
import { withSuspenseRoute } from './withSuspenseRoute'
import  Layout  from '../components/Layout/Layout'
import  RouteWrapper  from './RouteWrapper'

const Login =  lazy(()=> import('../pages/Login/Login'))
const Register =  lazy(()=> import('../pages/Login/Register'))

const Homepage =  lazy(()=> import('../pages/Homepage'))
const Error =  lazy(()=> import('../components/Error'))
const Account =  lazy(()=> import('../pages/Account'))
const MemberSetting =  lazy(()=> import('../pages/MemberSetting'))


const Routes = (props) => {
  const route =[
    {
      path:'/',
      component: withSuspenseRoute(Login, LayoutFallback),
      name: "首頁",
      rule: ["ADMIN","USER"]
    },
    {
      name: "個人資訊管理",
      children:[
        {
          path:'/account',
          component: withSuspenseRoute(Account, LayoutFallback),
          name: "帳戶設定",
          rule: ["ADMIN"]
        },
      ],
      rule: ["ADMIN","USER"]
    },
    {
      path:'/',
      component: withSuspenseRoute(MemberSetting, LayoutFallback),
      name: "會員管理",
      rule: ["ADMIN"]
    },
  ]
  return (
    <Switch>
      {/*<Redirect path="/" to="/homepage" exact/>*/}

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
        path={'/'}
        exact
        component={(
          withSuspenseRoute(Homepage,LayoutFallback)
        )}
        name={"首頁"}
        layout={Layout}
      />
      {/*<RouteWrapper*/}
      {/*  path={'/new'}*/}
      {/*  exact*/}
      {/*  component={(*/}
      {/*    withSuspenseRoute(New,LayoutFallback)*/}
      {/*  )}*/}
      {/*  name={"最新消息"}*/}
      {/*  layout={Layout}*/}
      {/*/>*/}
      <Route
        path={'/*'}

        component={withSuspenseRoute(Error, LayoutFallback)}
      />

    </Switch>
  )
}
export default Routes
