import React from 'react'
import "./Layout.sass"
import {Link} from 'react-router-dom'
const Layout = (props) => {
  const { children } = props
  return (
    <div className="">
      <div className="" style={{zIndex: 1}}>

        <div className="">
          <div className="layout_header">
            <div>Logo</div>
            <div className="route">
              <Link to={'/homepage'}>首頁</Link>
              <Link to={'/new'}>最新消息</Link>
            </div>

          </div>
          <div className="layout_contain">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Layout
