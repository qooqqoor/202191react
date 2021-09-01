import React, {useEffect, useState} from 'react'
import { Route } from 'react-router'
import { connect } from "react-redux";
import { setToken } from "../store/action/userAction'";
import { Redirect } from 'react-router'

const RouteWrapper = (props) => {
  const {
    component: Component,
    layout: Layout,
    userStatus : {token},
    ...rest
  } = props

  const [load,setLoad] = useState(true)

console.log(12,props)
  useEffect(()=>{
    VerifyPermissions()
  },[])

  const VerifyPermissions = ()=>{
    fetch('/api/authentication', {
      method: 'GET',
      // headers 加入 json 格式
      headers: {
        'AUTHENTICATION_TOKEN': token
      },
      // body 將 json 轉字串送出
      // body: JSON.stringify({
      //   username: 'lovef1232e@hexschool.com',
      //   password: '12345678'
      // })
    }).then((response) => {
      return response.json();
    }).then((jsonData) => {
      console.log(jsonData);
      setLoad(false)
      if(!jsonData.success){
        window.location.href='#/login'
      }
    }).catch((err) => {
      console.log('錯誤:', err);
    })
  }

  const {name} = {...rest}
  return (
    <Route
      {...rest}
      render={props => (

        <Layout {...props} name={name}>
          {
            !load?(<Component {...props}  />):"權限驗證中(身分驗證)...."
          }

        </Layout>

      )}
    />
  )
}

const mapStateToProps = (state) => ({
  userStatus: state.userReducer,

});

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (value) => {
      dispatch(setToken(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteWrapper);
