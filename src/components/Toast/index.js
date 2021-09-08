import React, { useEffect } from "react";

import ReactDOM from "react-dom";
import "./index.sass";
const toast = (text, state, time) => {
  const alert = document.createElement("div");
  document.body.appendChild(alert);//severity={`${state ? state : "success"}`}
  const dom = ((
    <div className={`tips ${state ? state : "success"}`} >
      <div className={'state'}>{
        state==='error'?
          'X':state==='info'?'!':'V'
      }</div>
      {text}
    </div>
  ));

  ReactDOM.render(dom, alert);

  setTimeout(
    () => {
      ReactDOM.unmountComponentAtNode(alert);
      document.body.removeChild(alert);
    },
    time?time:1500
  );
};

export default toast;
