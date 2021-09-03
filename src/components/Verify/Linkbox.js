import React, {useState} from "react";
import "./verify.sass"


const LinkBox = (props)=>{
  const{num,onMouseDown,onMouseUp,onMouseOver}= props

  return(
    <div className={`linkbox `}>
      <div
        className={`circle ${num.select?'select':''}`}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseOver={onMouseOver}
      >
      </div>
    </div>
  )
}

export default LinkBox
