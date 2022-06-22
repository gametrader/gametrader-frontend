import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './components/home-page/HomePage';
import RegisterPage from './components/register-page/RegisterPage';
import LoginPage from './components/login-page/LoginPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AddAdvertisementPage from './components/add-advertisement-page/AddAdvertisementPage';
import AdvertisementViewPage from './components/advertisement-view-page/AdvertisementViewPage';
import SearchResultPage from './components/search-result-page/SearchResultPage';


const App = () => {
	return (
		<Router>
			<div className='gt-main'>
				<Header/>
				<Routes>
					<Route path='/' element={<HomePage/>}/>
					<Route path='/register' element={<RegisterPage/>}/>
					<Route path='/login' element={<LoginPage/>}/>
					<Route path='/search-result' element={<SearchResultPage/>}/>
					<Route path='/add-advertisement' element={<AddAdvertisementPage/>}/>
					<Route path='/view-advertisement' element={<AdvertisementViewPage/>}/>
				</Routes>
				<Footer/>
			</div>
		</Router>
	);
};

export default App;
