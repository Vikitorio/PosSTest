import logo from './logo.svg';
import './App.css';

function App() {
  function fetchRequestTest(){
    fetch('http://localhost/demo/',{
      method: 'POST',
      headers :{
        'Content-Type':'test'
      },
      body : JSON.stringify({action:1})
    })
    .then(response => response.text())
    .then(response => {
      console.log(response);
    })
  }
  return (
    <div className="App">
      <button onClick = {fetchRequestTest}>button</button>
      <header className="App-header">
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
