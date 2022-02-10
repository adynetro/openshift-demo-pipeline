import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Gremlins need to learn <code>React</code> fast !.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p> but they master Openshift at least !... Proudly built and hosted on okd 4.9 </p>
      </header>
    </div>
  );
}

export default App;
