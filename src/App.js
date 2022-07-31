import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Pages/Home';
import Shop from './Pages/Shop';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop' element={<Shop />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
