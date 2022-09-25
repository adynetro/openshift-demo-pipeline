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
          Learn React now ! BLA
        </a>
        <p> but they master Openshift and Azure at least !... Proudly built on Github Actions and hosted on Azure </p>
      </header>
    </div>
  );
}

export default App;
