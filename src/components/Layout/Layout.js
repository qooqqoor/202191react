import React from 'react'
import "./Layout.sass"
import {Link} from 'react-router-dom'
import logoutIcon from "../../assets/Layout/logout.png"
import bellIcon from "../../assets/Layout/bell.png"

const Layout = (props) => {
  const { children ,state,logout } = props
  return (
    <div className="">
      <div className="" style={{zIndex: 1}}>

        <div className="">
          <div className="layout_header">
            <div>Logo</div>
            <div className="user">
              <img className="user__img" src={bellIcon} alt=""/>
              <div className="user__userImg" style={{backgroundImage: `url("${state.imgLink}")`}}/>
              <span className="user__text">{state.name||'無名'}({state.username})</span>
              <img className="user__img" src={logoutIcon} alt="" onClick={logout}/>
              {/*<Link to={'/homepage'}>首頁</Link>*/}
              {/*<Link to={'/new'}>最新消息</Link>*/}
            </div>

          </div>
          <div className="layout_body">
            <div className="layout_body__drawer"></div>
            <div className="layout_body__contain">{children}</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Layout
