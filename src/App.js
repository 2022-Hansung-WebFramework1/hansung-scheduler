import logo from './logo.svg';
import './App.css';

import CardTable from 'component/CardTable';
import bigList from 'test-data/bigList';

import MyScheduler from 'component/MyScheduler';

function App() {
    return (
        <div className="App">
            <MyScheduler />
            <CardTable data={bigList} />
        </div>
    );
}

export default App;
