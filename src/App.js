import logo from './logo.svg';
import './App.css';
import RegistrationForm from'./RegistrationForm/RegistrationForm';
function App() {
  function fetchRequestTest(){
    fetch('http://localhost/DzenPosBackend/Api/Chlen',{
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
      <RegistrationForm></RegistrationForm>
    </div>
  );
}

export default App;
