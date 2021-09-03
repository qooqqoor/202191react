import React, {useEffect, useState} from "react";
import "./verify.sass"
import {linkStyle} from "./linkStyle"
const LinkLine = (props)=>{

  const {num,next,index,isAncArray,isUserLine,userLineStyle={}} = props

  useEffect(()=>{

    init()

  },[num,next])
  const init= ()=>{

    setStyle(linkStyle(num,next))
  }



  const [style,setStyle] = useState({})
  return(
    <>
        <div className="anslink" style={{...style,...userLineStyle,background:!isAncArray?'rgba(250,255,255,1)':'rgba(200,200,200,0.8)',height:isAncArray?"1px":"5px"}}>
          <p className="anslink_p">
            {isAncArray&&(index +1)}
          </p>
        </div>

    </>
  )
}

export default LinkLine
