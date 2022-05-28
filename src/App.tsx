import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/home-page/HomePage';
import RegisterPage from './components/register-page/RegisterPage';
import LoginPage from './components/login-page/LoginPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AddAdvertisementPage from './components/add-advertisement-page/AddAdvertisementPage';


const App = () => {
	return (
		<Router>
			<div className='gt-main'>
				<Header />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/register' element={<RegisterPage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/add-advertisement' element={<AddAdvertisementPage />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
