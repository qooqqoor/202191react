import logo from './logo.svg';
import './App.css';

function App() {
  const login = () =>{
    fetch('/api/login', {
      method: 'POST',
      // headers 加入 json 格式
      headers: {
        'Content-Type': 'application/json'
      },
      // body 將 json 轉字串送出
      body: JSON.stringify({
        username: 'lovef1232e@hexschool.com',
        password: '12345678'
      })
    }).then((response) => {
      return response.json();
    }).then((jsonData) => {
      console.log(jsonData);
    }).catch((err) => {
      console.log('錯誤:', err);
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={login}>13</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
