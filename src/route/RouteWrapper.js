import React, {useEffect, useState} from 'react'
import { Route } from 'react-router'
import { connect } from "react-redux";
import { Redirect } from 'react-router'
import toast from "../components/Toast";
import {cleanAllAction} from "../store/action/userAction'";
import {useHistory} from "react-router-dom"
import { getToken } from "../util/localStorage";

import { user as api } from "../api";

const RouteWrapper = (props) => {
  const {
    component: Component,
    layout: Layout,
    cleanAll,
    state,
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
      setLoad(false)
    }catch (e) {
      setLoad(false)
    }
    // fetch('/api/authentication', {
    //   method: 'GET',
    //   headers: {
    //     'AUTHENTICATION_TOKEN': token
    //   },
    // }).then((response) => {
    //   return response.json();
    // }).then((jsonData) => {
    //   if(!jsonData.success){
    //     toast('驗證失敗','error')
    //     cleanAll()
    //     setTimeout(()=>{
    //
    //       history.push('/login')
    //     },1000)
    //   }else {
    //     setLoad(false)
    //   }
    // }).catch((err) => {
    // })
  }

  const {name} = {...rest}
  return (
    <Route
      {...rest}
      render={props => (

        <Layout {...props} name={name}>
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
    token: state.userReducer.token
  }
});
const mapDispatchToProps = (dispatch) => {
  return {
    cleanAll:(value)=>{
      dispatch(cleanAllAction(value))
    }

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RouteWrapper);

