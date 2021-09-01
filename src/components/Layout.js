import React from 'react'

const Layout = (props) => {
  const { children } = props
  return (
    // <LayoutProvider>
    <div className="">
      <div className="" style={{zIndex: 1}}>

        <div className="">
          <div className="">{children}</div>
          {/*<Version />*/}
        </div>
      </div>
    </div>
    // {/*<LayoutProvider>*/}
  )
}

export default Layout
