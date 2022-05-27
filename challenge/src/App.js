import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home.jsx';
import UserDetail from './components/UserDetail/UserDetail.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>} /> 
      <Route exact path='/detail/:user' element={<UserDetail/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
