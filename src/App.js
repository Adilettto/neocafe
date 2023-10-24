import { Route, Routes } from 'react-router';
import './App.css';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
