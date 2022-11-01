import React ,{useState}from "react";
import "./login.sass"
import invisible from "../../assets/invisible.png"
import visibility from "../../assets/visibility.png"
import toast from "../../components/Toast";
import {connect} from "react-redux";
import {setTokenAction} from "../../store/action/userAction"
import Verify from "../../components/Verify/Verify"
import Input from "../../components/Input";
import { user as api } from "../../api";

export const Login =  (props) => {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [load, setLoad] = useState(false)
  const [verify, setVerify] = useState(false)
  const { setToken,history } = props
  const login = async ()=>{
    try{
      const res = await api.login({
        username: account,
        password: password
      })
      toast(res.message)
      setToken(res.token)
      setTimeout(()=>{ history.push('/homepage')},1000)
      setLoad(false)
    }catch (e) {
      setLoad(false)
    }
  }

  const form = [
    {
      type:'text',
      rule:[],
      onChange:(v)=>{setAccount(v)},
      value:account,
      label:'帳號',
      errorText:'請輸入帳號',
      placeholder: '請輸入帳號'
    },
    {
      type:'password',
      rule:[],
      onChange:(v)=>{setPassword(v)},
      value:password,
      label:'密碼',
      errorText:'請輸入密碼',
      placeholder: '請輸入密碼',
      maxLength:8
    },

  ]
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
        {
          form.map((v,i)=>{
            return(
              <Input
                key={i}
                type={v.type}
                rule={v.rule}
                onChange={v.onChange}
                value={v.value}
                label={v.label}
                errorText={v.errorText}
                placeholder={v.placeholder}
                maxLength={v.maxLength||null}
              />
            )
          })
        }
        <a href="#/register" className={"registerBtn"}>註冊</a>
        <button disabled={load||!account||!password} onClick={onSubmit}>登入</button>
      </div>
      {
        verify?<Verify VerifySuccess={VerifySuccess} VerifyClose={VerifyClose}/>:null
      }

    </div>
  );
}
const mapStateToProps = (state) => ({
  state:{
    token: state.userReducer.token
  }
});
const mapDispatchToProps = (dispatch) => {
  return {
    setToken:(value)=>{
      dispatch(setTokenAction(value))
    }

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);


