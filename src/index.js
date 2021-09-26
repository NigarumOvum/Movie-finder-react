import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/Navbar/NavBar';
import LogoSpin from './components/LogoSpin/LogoSpin';
import Carousel from './components/Carousel/Carousel';
import FirstJumbotron from './components/Jumbotron/Jumbotron';
import DataList from './components/MovieList/DataList';
import FooterPage from './components/Footer/Footers';
import './index.css';
import ToastCont from './components/Toast/ToastContainer';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <ToastCont />
    <LogoSpin />
    <Carousel />
    <FirstJumbotron />
    <DataList />
    <FooterPage />
  </React.StrictMode>,
  document.getElementById('root')
);
