export const linkStyle=(v,n)=>{
  let _style = {}

  switch (v) {
    case 1:
      _style = {
        left: '17%',
        top: '16.8%',
      }
      switch(n){
        case 2:
          _style ={
            ..._style,
            width: '33%',
          }
          break
        case 4:
          _style ={
            ..._style,
            width: '33%',
            transform: 'rotate(90deg)'
          }
          break
        case 5:
          _style ={
            ..._style,
            width: '46%',
            transform: 'rotate(46deg)'
          }
          break
      }
      break
    case 2:
      _style = {
        width: '33%',
        left: '50%',
        top: '16.8%',
      }
      switch(n){
        case 1:
          _style ={
            ..._style,
            width: '33%',
            transform: 'rotate(180deg)'
          }
          break
        case 3:
          _style ={
            ..._style,
            width: '33%',
          }
          break
        case 4:
          _style ={
            ..._style,
            width: '46%',
            transform: 'rotate(135deg)'
          }
          break
        case 5:
          _style ={
            ..._style,
            width: '33%',
            transform: 'rotate(90deg)'
          }
          break
        case 6:
          _style ={
            ..._style,
            width: '48%',
            transform: 'rotate(45deg)'
          }
          break
      }
      break
    case 3:
      _style = {
        width: '33%',
        left: '83.5%',
        top: '16.8%',
      }
      switch(n){
        case 2:
          _style ={
            ..._style,
            width: '33%',
            transform: 'rotate(180deg)'
          }
          break
        case 5:
          _style ={
            ..._style,
            width: '46%',
            transform: 'rotate(135deg)'
          }
          break
        case 6:
          _style ={
            ..._style,
            width: '33%',
            transform: 'rotate(90deg)'
          }
          break
      }
      break
    case 4:
      _style = {
        width: '33%',
        left: '16.5%',
        top: '50%',
      }
      switch(n){
        case 1:
          _style ={
            ..._style,
            width: '33%',
            transform: 'rotate(270deg)'
          }
          break
        case 2:
          _style ={
            ..._style,
            width: '46%',
            transform: 'rotate(-45deg)'
          }
          break
        case 5:
          _style ={
            ..._style,
            width: '33%',
            transform: 'rotate(0deg)'
          }
          break
        case 8:
          _style ={
            ..._style,
            width: '46%',
            transform: 'rotate(45deg)'
          }
          break
        case 7:
          _style ={
            ..._style,
            width: '33%',
            transform: 'rotate(90deg)'
          }
          break
      }
      break
    case 5:
      _style = {
        width: '33%',
        left: '50%',
        top: '50%',
      }
      switch(n){
        case 1:
          _style ={
            ..._style,
            width: '46%',
            transform: 'rotate(225deg)'
          }
          break
        case 2:
          _style ={
            ..._style,
            width: '33%',
            transform: 'rotate(-90deg)'
          }
          break
        case 3:
          _style ={
            ..._style,
            width: '46%',
            transform: 'rotate(-45deg)'
          }
          break
        case 4:
          _style ={
            ..._style,
            width: '33%',
            transform: 'rotate(180deg)'
          }
          break

        case 6:
          _style ={
            ..._style,
            width: '33%',
            transform: 'rotate(0deg)'
          }
          break
        case 7:
          _style ={
            ..._style,
            width: '46%',
            transform: 'rotate(135deg)'
          }
          break
        case 8:
          _style ={
            ..._style,
            width: '33%',
            transform: 'rotate(90deg)'
          }
          break
        case 9:
          _style ={
            ..._style,
            width: '46%',
            transform: 'rotate(45deg)'
          }
          break
      }

      break
    case 6:
      _style = {
        width: '33%',
        left: '83.5%',
        top: '50%',
      }
      switch(n){
        case 2:
          _style ={
            ..._style,
            width: '46%',
            transform: 'rotate(225deg)'
          }
          break
        case 3:
          _style ={
            ..._style,
            width: '33%',
            transform: 'rotate(-90deg)'
          }
          break
        case 5:
          _style ={
            ..._style,
            width: '33%',
            transform: 'rotate(180deg)'
          }
          break
        case 8:
          _style ={
            ..._style,
            width: '46%',
            transform: 'rotate(135deg)'
          }
          break
        case 9:
          _style ={
            ..._style,
            width: '33%',
            transform: 'rotate(90deg)'
          }
          break
      }
      break
    case 7:
      _style = {
        width: '33%',
        left: '16.5%',
        top: '83.5%',
      }
      switch(n){
        case 4:
          _style ={
            ..._style,
            width: '33%',
            transform: 'rotate(-90deg)'
          }
          break
        case 5:
          _style ={
            ..._style,
            width: '46%',
            transform: 'rotate(-45deg)'
          }
          break
        case 8:
          _style ={
            ..._style,
            width: '33%',
            transform: 'rotate(0deg)'
          }
          break

      }
      break
    case 8:
      _style = {
        width: '33%',
        left: '50%',
        top: '83.5%',
      }
      switch(n){
        case 4:
          _style ={
            ..._style,
            width: '46%',
            transform: 'rotate(225deg)'
          }
          break
        case 5:
          _style ={
            ..._style,
            width: '33%',
            transform: 'rotate(-90deg)'
          }
          break
        case 6:
          _style ={
            ..._style,
            width: '46%',
            transform: 'rotate(-45deg)'
          }
          break
        case 7:
          _style ={
            ..._style,
            width: '33%',
            transform: 'rotate(180deg)'
          }
          break
        case 9:
          _style ={
            ..._style,
            width: '33%',
            transform: 'rotate(0deg)'
          }
          break

      }
      break
    case 9:
      _style = {
        width: '33%',
        left: '82.5%',
        top: '83.5%',
      }
      switch(n){
        case 5:
          _style ={
            ..._style,
            width: '46%',
            transform: 'rotate(225deg)'
          }
          break
        case 6:
          _style ={
            ..._style,
            width: '33%',
            transform: 'rotate(-90deg)'
          }
          break
        case 8:
          _style ={
            ..._style,
            width: '33%',
            transform: 'rotate(180deg)'
          }
          break

      }

      break

  }
  return _style
}
