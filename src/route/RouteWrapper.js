import React, {useEffect, useState} from 'react'
import { Route } from 'react-router'
import { connect } from "react-redux";
import { Redirect } from 'react-router'

const RouteWrapper = (props) => {
  const {
    component: Component,
    layout: Layout,
    ...rest
  } = props

  const [load,setLoad] = useState(true)

  useEffect(()=>{
    VerifyPermissions()
  },[])
  const token = localStorage.getItem('token')
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

      if(!jsonData.success){
        window.location.href='#/login'
        localStorage.removeItem('token')
      }else {
        setLoad(false)
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
            !token?<Redirect  to="/login" exact/>:!load?(<Component {...props}  />):"權限驗證中(身分驗證)...."
          }

        </Layout>

      )}
    />
  )
}



export default RouteWrapper;
