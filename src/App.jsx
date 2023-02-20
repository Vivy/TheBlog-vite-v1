import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/header/header';
import Navbar from './component/navbar/navbar';
import Login from './component/login/login';
import Register from './component/register/register';
import Home from './component/home/home';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
