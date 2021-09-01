import React ,{useState}from "react";
import "./login.sass"
import invisible from "../assets/invisible.png"
import visibility from "../assets/visibility.png"
import {setToken} from "../store/action/userAction'";
import {connect} from "react-redux";

export const Login =  (props) => {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [seePassword, setSeePassword] = useState(true)
  const [load, setLoad] = useState(false)


  const login = ()=>{
    if(account!=""&&password!=""){
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
        console.log(jsonData);

        console.log(props.userStatus)
        props.setToken(jsonData.token)

      }).catch((err) => {
        console.log('錯誤:', err);
      })
    }

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
        <button disabled={load||!account||!password} onClick={login}>登入</button>
      </div>
    </div>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
