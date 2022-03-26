import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./components/home-page/HomePage";
import RegisterPage from './components/register-page/RegisterPage';
import LoginPage from './components/login-page/LoginPage';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
      <Router>
        <div className='gt-main'>
            <div id = "header">
                <Header/>
            </div>

            <div id = "content">
                <Routes>
                    <Route path='/' element={<HomePage/>} />
                    <Route path='/register' element={<RegisterPage/>} />
                    <Route path='/login' element={<LoginPage/>} />
                </Routes>

                <div id = "footer">
                    {/*<Footer/>*/}
                </div>
            </div>

        </div>
      </Router>

  );
}

export default App;
