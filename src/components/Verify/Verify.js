import React, {useEffect, useState} from "react";
import "./verify.sass"
import LinkBox from "./Linkbox.js"
import LinkLine from "./LinkLine.js"

const resetArray = [
  {
    key: 1,
    select: false
  },
  {
    key: 2,
    select: false
  },
  {
    key: 3,
    select: false
  },
  {
    key: 4,
    select: false
  },
  {
    key: 5,
    select: false
  },
  {
    key: 6,
    select: false
  },
  {
    key: 7,
    select: false
  },
  {
    key: 8,
    select: false
  },
  {
    key: 9,
    select: false
  },
]

const Verify = (props)=>{
  const{
    VerifySuccess,VerifyClose
  }=props
  const [start,setStart] = useState(false)
  const [array,setArray] = useState(resetArray)
  const [selectArray,setSelectArray] = useState([3,5,8,4,2,1])
  const [selectDot,setSelectDot] = useState()
  const [mouseStart,setMouseStart] = useState(false)
  const [userLineStyle,setUserLineStyle] = useState({
    width: "0%",
    transform: 'rotate(0deg)'
  })

  const [ans,setAns]  = useState([])

  useEffect(()=>{
    init()
  },[])

  const reandAns = ()=>{
    let _ans = []
    _ans = [Math.ceil(Math.random()*9)]
    let check = true
    let err = 0
    while (check){
      const rend = Math.ceil(Math.random()*9)
      if(dotCheck(rend,_ans[_ans.length-1])){
        const repeat = _ans.find((a)=>{
          return a===rend
        })
        if(!repeat){
          _ans = [
            ..._ans,
            rend
          ]
        }else{
          err++
        }
      }else{
        err++
      }
      if(err>15&&_ans.length>=3){
        check = false
        err = 0
      }

    }
    setAns(_ans)

  }




  const onMouseDown = (num,e)=>{
    console.log('down',e)
    setStart(true)
    setMouseStart({
      x:e.clientX,
      y:e.clientY
    })
    setArray(array.map((v)=>{
      if(num.key===v.key){
        return{
          ...v,
          select: true
        }
      }else{
        return v
      }
    }))
    setSelectArray([num.key])
    setSelectDot(num.key)
  }
  const onMouseUp = ()=>{
    console.log('up')
    submit()
  }
  const onMouseLeave = (num)=>{
    console.log('leave')
    submit()
  }
  const onMouseOver=(num,e)=>{
    console.log('Over')
    if(!num.select && dotCheck(num.key,selectArray[selectArray.length-1])){

      setArray(array.map((v)=>{
        if(num.key===v.key){
          return{
            ...v,
            select: true
          }
        }else{
          return v
        }
      }))
      setSelectArray([
        ...selectArray,num.key
      ])
      setMouseStart({
        x:e.clientX,
        y:e.clientY
      })
      setSelectDot(num.key)
    }

  }
  const onMouseMove=(e)=>{
    // console.log('onMouseMove',e)
    const _widthx = mouseStart.x-e.clientX>0?mouseStart.x-e.clientX:-(mouseStart.x-e.clientX)
    const _widthy = mouseStart.y-e.clientY>0?mouseStart.y-e.clientY:-(mouseStart.y-e.clientY)
    const _width = Math.sqrt(_widthx*_widthx+_widthy*_widthy)

    const _rotatex = mouseStart.x-e.clientX
    const _rotatey = mouseStart.y-e.clientY
    let _deg

    _deg = (_rotatex<0? -(_rotatey/_width  *(85) ): (_rotatey/_width  *85 )-180) //270


    const _rotate  = _deg
    setUserLineStyle({
      width: `${_width}px`,
      transform: `rotate(${_rotate}deg)`
    })
  }
  const submit = () =>{
    console.log(ans,selectArray)
    setStart(false)
    if(ans.toString()===selectArray.toString()){
      console.log("驗證成功")
      VerifySuccess()
    }else{
      console.log("驗證失敗")
      init()
    }
  }
  const dotCheck = (key,selectKey)=>{
    let dotCheckArray = []
    switch (key) {
      case 1:
        dotCheckArray = [2,4,5]
        break
      case 2:
        dotCheckArray = [1,3,4,5,6]
        break
      case 3:
        dotCheckArray = [2,5,6]
        break
      case 4:
        dotCheckArray = [1,2,5,7,8]
        break
      case 5:
        dotCheckArray = [1,2,3,4,6,7,8,9]
        break
      case 6:
        dotCheckArray = [2,3,5,8,9]
        break
      case 7:
        dotCheckArray = [4,5,8]
        break
      case 8:
        dotCheckArray = [4,5,6,7,9]
        break
      case 9:
        dotCheckArray = [5,6,8]
        break
    }




    return dotCheckArray.find((v)=>{
      return  v === selectKey
    })

  }


  const init = ()=>{

    setArray(resetArray)
    setSelectArray([])
    reandAns()
    setMouseStart({});
    setUserLineStyle({
      width: "0%",
      transform: 'rotate(0deg)'
    });
  }
  return(
    <div className={"verify"} onClick={(e)=>{
      VerifyClose()
    }}>

      <div className="card">

        <div className="container" onClick={(e)=>e.stopPropagation()} onMouseUp={start?onMouseUp:null} onMouseLeave={start?onMouseLeave:null} onMouseMove={start?onMouseMove:null} style={{cursor: start?'pointer':'default'}}>
          {
            array.map((v,i)=>{
              return(
                <LinkBox key={v.key}  num={v}  onMouseDown={(e)=>onMouseDown(v,e)} onMouseOver={(e)=>{start&&onMouseOver(v,e)}}/>
              )
            })
          }
          <div className="ans">
            {
              ans.map((a,i)=>{
                if(i!==(ans.length-1)){
                  return <LinkLine key={a} num={a} next={ans[i+1]} index={i} isAncArray={true}/>
                }
              })
            }
          </div>
          <div className="userQ">
            {
              selectArray.map((a,i)=>{
                if(i!==(selectArray.length-1)){
                  return <LinkLine key={a} num={a} next={selectArray[i+1]} index={i} />
                }
              })
            }
          </div>
          {start&&(
            <div className="userLine">
              <LinkLine num={selectArray[selectArray.length - 1]} isUserLine userLineStyle={userLineStyle}/>
            </div>
          )}
        </div>
        <div >請照順序滑動解鎖</div>
      </div>

    </div>
  )
}

export default Verify
