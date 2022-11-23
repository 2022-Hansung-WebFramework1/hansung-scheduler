import logo from './logo.svg';
import './App.css';

import CardTable from 'component/CardTable';
import bigList from 'data/bigList';

import MyScheduler from 'component/MyScheduler';

function App() {
  return (
    <div className="App">
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
      
      <div>
        <MyScheduler />
      </div>
      <div>
        <CardTable data={bigList} />
      </div>


    </div>
  );
}

export default App;
