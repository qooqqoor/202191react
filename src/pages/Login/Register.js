import React ,{useState}from "react";
import "./login.sass"
import invisible from "../../assets/invisible.png"
import visibility from "../../assets/visibility.png"

export default (props) => {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [passwordAgain, setPasswordAgain] = useState('')
  const [seePassword, setSeePassword] = useState(true)
  const [seePasswordAgain, setSeePasswordAgain] = useState(true)
  const [load, setLoad] = useState(false)

  const register = ()=>{

    if(!isEmail(account)){
      console.log("請輸入正確的信箱格式")
      return
    }
    if(!isPassword(password)){
      console.log("請輸入正確的密碼格式(首尾必須是英文；中間必須是數字)")
      return
    }


    fetch('/api/register', {
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
      console.log(response)
      return response.json()
    }).then((jsonData) => {
      console.log(jsonData);
    }).catch((err) => {
      console.log('錯誤:', err);
    })

  }
  const isEmail = (strEmail) => {
    const emailRegxp = /^([\w]+)(.[\w]+)*@([\w]+)(.[\w]{2,3}){1,2}$/;

    return emailRegxp.test(strEmail);
  }
  const isPassword = (password) => {
    const titlefootRegxp = /[a-zA-Z]/;
    let status = true

    const passwordArray = password.split('')
    console.log(passwordArray)

    passwordArray.forEach((v,i)=>{
      if(i===0||i===(passwordArray.length-1)){
        if(!titlefootRegxp.test(v)){
          status = false
        }
      }else{
        const _v = parseInt(v)
        console.log(_v)
        if(!_v){
          status = false
        }
      }
    })



    return status
  }



  return (
    <div className='login'>
      <div className="box">
        <div className="title">註冊</div>
        <div className="input_box">
          <p>帳號</p>
          <input type="text" value={account} onChange={(e)=>{setAccount(e.target.value)}} placeholder={"必須是信箱"}/>
        </div>
        <div className="input_box">
          <p>密碼</p>
          <input type={seePassword?"password":"text"} value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="4-8字元；首尾必須是英文；中間必須是數字" maxLength={8} />
          <img src={seePassword?invisible:visibility} alt="" onClick={()=>{setSeePassword(!seePassword)}}/>
        </div>
        <div className="input_box">
          <p>確認密碼</p>
          <input type={seePasswordAgain?"password":"text"} value={passwordAgain} onChange={(e)=>{setPasswordAgain(e.target.value)}} placeholder="4-8字元；首尾必須是英文；中間必須是數字" maxLength={8}/>
          <img src={seePasswordAgain?invisible:visibility} alt="" onClick={()=>{setSeePasswordAgain(!seePasswordAgain)}}/>
        </div>
        <a href="#/login" className={"registerBtn"}>返回登入</a>
        <button disabled={load||!account||(password.length<4)||!passwordAgain||password!==passwordAgain} onClick={register}>註冊</button>
      </div>
    </div>
  );
}
