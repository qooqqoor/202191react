import React from 'react'

export const LayoutFallback = () => {
  return (

    <div className={"noLayoutFallback"}>
      loading
    </div>
    // <AppContent className="flex items-center">
    // 	<LoadingOutlined className="mr-2" />
    // 	正在為您努力加載頁面...
    // </AppContent>
  )
}
export default LayoutFallback
