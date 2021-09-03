import React ,{useState}from "react";
import "./login.sass"
import invisible from "../../assets/invisible.png"
import visibility from "../../assets/visibility.png"
import Toast from "../../components/Toast";

export default (props) => {
  const [account, setAccount] = useState('')
  const [accountErr, setAccountErr] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordErr, setPasswordErr] = useState(false)

  const [passwordAgain, setPasswordAgain] = useState('')
  const [passwordAgainErr, setPasswordAgainErr] = useState(false)

  const [seePassword, setSeePassword] = useState(true)
  const [seePasswordAgain, setSeePasswordAgain] = useState(true)
  const [load, setLoad] = useState(false)

  const register = ()=>{
    setLoad(true)
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
      if(jsonData.success){
        Toast(jsonData.message)
        setTimeout(()=>{
          window.location.href="#/login"
        },1000)
      }else{
        Toast(jsonData.message,'error')
        setLoad(false)
      }

    }).catch((err) => {
      console.log('錯誤:', err);
      setLoad(false)
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

  const accountOnChange = (e)=>{

    setAccountErr(!isEmail(e.target.value))
    setAccount(e.target.value)
  }
  const passwordOnChange= (e)=>{
    setPasswordErr(!isPassword(e.target.value))
    setPassword(e.target.value)
  }
  const passwordAgainOnChange= (e)=>{
    setPasswordAgainErr(e.target.value!==password)
    setPasswordAgain(e.target.value)
  }


  return (
    <div className='login'>
      <div className="box">
        <div className="title">註冊</div>
        <div className={`input_box ${accountErr&&'err'}`}>
          <p>帳號</p>
          <input type="text" value={account} onChange={(e)=>{accountOnChange(e)}} placeholder={"必須是信箱"}/>
          {accountErr&&<p className={'errText'}>請輸入正確的email格式</p>}
        </div>
        <div className={`input_box ${passwordErr&&'err'}`}>
          <p>密碼</p>
          <input type={seePassword?"password":"text"} value={password} onChange={(e)=>{passwordOnChange(e)}} placeholder="4-8字元；首尾必須是英文；中間必須是數字" maxLength={8} />
          <img src={seePassword?invisible:visibility} alt="" onClick={()=>{setSeePassword(!seePassword)}}/>
          {passwordErr&&<p className={'errText'}>首尾必須是英文；中間必須是數字</p>}
        </div>
        <div className={`input_box ${passwordAgainErr&&'err'}`}>
          <p>確認密碼</p>
          <input type={seePasswordAgain?"password":"text"} value={passwordAgain} onChange={(e)=>{passwordAgainOnChange(e)}} placeholder="4-8字元；首尾必須是英文；中間必須是數字" maxLength={8}/>
          <img src={seePasswordAgain?invisible:visibility} alt="" onClick={()=>{setSeePasswordAgain(!seePasswordAgain)}}/>
          {passwordAgainErr&&<p className={'errText'}>與密碼不相符</p>}
        </div>
        <a href="#/login" className={"registerBtn"}>返回登入</a>
        <button disabled={load||!account||(password.length<4)||!passwordAgain||password!==passwordAgain} onClick={register}>註冊</button>
      </div>
    </div>
  );
}
