import React, {useEffect, useState} from 'react'
import { Route } from 'react-router'
import { connect } from "react-redux";
import { Redirect } from 'react-router'
import toast from "../components/Toast";
import {cleanAllAction,setUserAction} from "../store/action/userAction";
import {useHistory} from "react-router-dom"
import { getToken } from "../util/localStorage";

import { user as api } from "../api";

const RouteWrapper = (props) => {
  const {
    component: Component,
    layout: Layout,
    cleanAll,
    state,
    setUser,
    ...rest
  } = props
  const [load,setLoad] = useState(true)
  useEffect(async ()=>{
    await VerifyPermissions()
  },[])
  const token = getToken()
  const history = useHistory()
  const VerifyPermissions = async ()=>{
    try{
      const res = await api.authentication()
      toast(res.message)
      setUser({
        ...res.data
      })
      setLoad(false)
    }catch (e) {
      setLoad(false)
    }
  }
  const logout = () =>{
    cleanAll()
    toast('登出成功')
    setTimeout(()=>{ history.push('/login')},1000)
  }

  const {name} = {...rest}
  return (
    <Route
      {...rest}
      render={props => (

        <Layout {...props} name={name} state={state} logout={logout}>
          {
            !token?<Redirect  to="/login" exact/>:!load?(<Component {...props}  />):"權限驗證中(身分驗證)...."
          }
        </Layout>

      )}
    />
  )
}

const mapStateToProps = (state) => ({
  state:{
    ...state.userReducer
  }
});
const mapDispatchToProps = (dispatch) => {
  return {
    cleanAll:()=>{
      dispatch(cleanAllAction())
    },
    setUser:(value)=>{
      dispatch(setUserAction(value))
    }

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RouteWrapper);

