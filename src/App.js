import './App.css';
import {BrowserRouter as Router , Routes,Route ,Link} from 'react-router-dom';
import Header from './Components/Header';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Header/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
