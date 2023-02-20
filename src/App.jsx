import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/header/header';
import Register from './component/register/register';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='register' element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
