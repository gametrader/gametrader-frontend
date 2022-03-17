import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./components/home-page/HomePage";
import RegisterPage from './components/register-page/RegisterPage';
import LoginPage from './components/login-page/LoginPage';

function App() {
  return (
    <div className='gt-main'>
        <Router>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/register' element={<RegisterPage/>} />
                <Route path='/login' element={<LoginPage/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
