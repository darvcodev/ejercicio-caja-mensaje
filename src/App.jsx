import reactLogo from "./assets/react.svg";
import "./styles/App.css";
import { InputCajita } from "./InputCajita";

function App() {

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <InputCajita />
      <p className="read-the-docs">Create by DarvCode white 💙</p>
    </div>
  );
}

export default App;
