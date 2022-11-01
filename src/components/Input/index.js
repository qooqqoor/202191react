import React, {useState} from 'react'
import "./index.sass"
import invisible from "../../assets/invisible.png";
import visibility from "../../assets/visibility.png";
import {formCheck} from "../../util/validator"

const Input = (props)=>{
  const {
    type,
    rule = [],
    onChange = ()=>{},
    value = '',
    label,
    errorText,
    maxLength,
    placeholder,
    required
  } = props





  const onRuleChange = (value) =>{

    setError(formCheck(value,rule))
    onChange(value)
  }

  const [seePassword,setSeePassword] = useState(false)
  const [error,setError] = useState(false)

  if(type === 'password'){
    return(
      <div className={`input_box ${error&&'err'}`}>
        {required&&<span style={{color:'red'}}>*</span>}
        <p>{label}</p>
        <input type={seePassword?"password":"text"} value={value} onChange={(e)=>{onRuleChange(e.target.value)}} maxLength={maxLength} placeholder={placeholder}/>
        <img src={seePassword?invisible:visibility} alt="" onClick={()=>{setSeePassword(!seePassword)}}/>
        {error&&<p className={'errText'}>{errorText}</p>}
      </div>
    )
  }else{
    return(
      <div className={`input_box ${error&&'err'}`}>
        {required&&<span style={{color:'red'}}>*</span>}

        <p>{label}</p>
        <input type={type} value={value} onChange={(e)=>{onRuleChange(e.target.value)}} maxLength={maxLength} placeholder={placeholder}/>
        {error&&<p className={'errText'}>{errorText}</p>}
      </div>
    )
  }


}

export default Input
