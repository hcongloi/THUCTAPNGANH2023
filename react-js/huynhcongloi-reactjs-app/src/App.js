import logo from './logo.svg';
import './App.css';
import { addNumbers } from './js-es6/bai9/util';

function App() {
  const result = addNumbers(10, 20);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload used by Huynh Cong Loi.
        </p>
        <div>
            <h1>React App</h1>
            <p>Tổng của 10 và 20 là: {result}</p>
        </div>
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
