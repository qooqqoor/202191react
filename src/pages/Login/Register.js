import React ,{useState}from "react";
import "./login.sass"
import invisible from "../../assets/invisible.png"
import visibility from "../../assets/visibility.png"
import toast from "../../components/Toast";
import Input from "../../components/Input"
import {formCheck} from "../../util/validator"
import {user as api} from "../../api";

export default (props) => {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [passwordAgain, setPasswordAgain] = useState('')
  const [load, setLoad] = useState(false)
  const {history} = props

  const register = async ()=>{
    setLoad(true)
    let err = false
    for(let i = 0 ; i< form.length ; i++){
      if(formCheck(form[i].value,form[i].rule)){
        toast(form[i].errorText,'error')
        err = true
        break
      }
    }
    if(err){
      return
    }
    try{
      const res = await api.register({
        username: account,
        password: password
      })
      toast(res.message)
      setTimeout(()=>{ history.push('/login')},1000)
      setLoad(false)
    }catch (e) {
      setLoad(false)
    }


  }


const form = [
  {
    type:'text',
    rule:['email'],
    onChange:(v)=>{setAccount(v)},
    value:account,
    label:'帳號',
    errorText:'請輸入正確的email格式',
    placeholder: '必須是信箱'
  },
  {
    type:'password',
    rule:[{'length': {min:4,max:8}}, {'ex': {rxg: /^[A-z]\d+[A-z]$/}}],
    onChange:(v)=>{setPassword(v)},
    value:password,
    label:'密碼',
    errorText:'密碼首尾必須是英文；中間必須是數字',
    placeholder: '4-8字元；首尾必須是英文；中間必須是數字',
    maxLength:8
  },
  {
    type:'password',
    rule:[{'same': {value:password}}],
    onChange:(v)=>{setPasswordAgain(v)},
    value:passwordAgain,
    label:'確認密碼',
    errorText:'確認密碼與密碼不相符',
    placeholder: '必須與密碼相符',
    maxLength:8
  },
]

  return (
    <div className='login'>
      <div className="box">
        <div className="title">註冊</div>
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


        <a href="#/login" className={"registerBtn"}>返回登入</a>
        <button disabled={load}  onClick={register}>註冊</button>
      </div>
    </div>
  );
}
