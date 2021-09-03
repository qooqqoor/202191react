import React ,{useState}from "react";
import "./login.sass"
import invisible from "../../assets/invisible.png"
import visibility from "../../assets/visibility.png"
import Toast from "../../components/Toast";
import {connect} from "react-redux";
import Verify from "../../components/Verify/Verify"
export const Login =  (props) => {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [seePassword, setSeePassword] = useState(true)
  const [load, setLoad] = useState(false)
  const [verify, setVerify] = useState(false)

  const login = ()=>{



      fetch('/api/login', {
        method: 'POST',

        // headers 加入 json 格式
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        // body 將 json 轉字串送出
        body: JSON.stringify({
          username: account,
          password: password
        })
      }).then((response) => {
        // console.log(response)
        // props.setToken()
        return response.json()
      }).then((jsonData) => {
        if(!jsonData.success){
          Toast(jsonData.message,'error')
          setLoad(false)
        }else{
          localStorage.setItem('token', jsonData.token)
          Toast(jsonData.message)
          setTimeout(()=>{ window.location.href='#/homepage'},1000)

        }
        console.log(jsonData);

        console.log(props.userStatus)


      }).catch((err) => {
        Toast(err.message,'error')
        console.log('錯誤:', err);
        setLoad(false)
      })


  }
  const onSubmit = ()=>{
    if(account!=""&&password!=""){
      setLoad(true)
      setVerify(true)
    }
  }
  const VerifySuccess = () =>{

    login()
    setVerify(false)
  }
  const VerifyClose = ()=>{
    setVerify(false)
    setLoad(false)
  }


  return (
    <div className='login'>
      <div className="box">
        <div className="title">登入</div>
        <div className="input_box">
          <p>帳號</p>
          <input type="text" value={account} onChange={(e)=>{setAccount(e.target.value)}}/>
        </div>
        <div className="input_box">
          <p>密碼</p>
          <input type={seePassword?"password":"text"} value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          <img src={seePassword?invisible:visibility} alt="" onClick={()=>{setSeePassword(!seePassword)}}/>
        </div>
        <a href="#/register" className={"registerBtn"}>註冊</a>
        <button disabled={load||!account||!password} onClick={onSubmit}>登入</button>
      </div>
      {
        verify?<Verify VerifySuccess={VerifySuccess} VerifyClose={VerifyClose}/>:null
      }

    </div>
  );
}




export default Login;
