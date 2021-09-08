export const formCheck = (value,rule) =>{
  let error = false

  if(value.length!==0){
    rule.forEach((v)=>{
      if(v==='email'){
        error = !isEmail(value)
      }
      if(v.length?.min!=null||v.length?.max!=null){
        error = !(value.length>=v.length.min && value.length<=v.length.max)
      }
      if(v.ex!=null){
        error = !v.ex.rxg.test(value)
      }
      if(v.same){
        error = v.same.value!==value
      }

    })
  }else{
    error = true
  }

  return error
}

export const isEmail = (strEmail) => {
  const emailRegxp = /^([\w]+)(.[\w]+)*@([\w]+)(.[\w]{2,3}){1,2}$/;

  return emailRegxp.test(strEmail);
}