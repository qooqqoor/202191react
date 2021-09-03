import React, { Suspense } from 'react'

export const withSuspenseRoute =
  (RouteComponent, Fallback, ...withFuncs) =>
    (props) => {
      // console.log(135,withFuncs)
      withFuncs.forEach(e => e())
      return (
        <Suspense fallback={<Fallback />}>
          <RouteComponent
            {...withFuncs}
            {...props}
          />
        </Suspense>
      )
    }


