import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Counter from './Component/Counter';
import ReduxCounter from './Component/Redux/ReduxCounter';
import Home from './Component/Home';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/counter' element={<Counter />} />
      <Route path='/redux-counter' element={<ReduxCounter />} />
      <Route path='/' element={<Home/>} />



      </Routes>

    
    </div>
  );
}

export default App;
