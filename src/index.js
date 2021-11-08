import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/Navbar/NavBar';
import Carousel from './components/Carousel/Carousel';
import FirstJumbotron from './components/Jumbotron/Jumbotron';
import DataList from './components/MovieList/DataList';
import FooterPage from './components/Footer/Footers';
import './index.scss';
import ToastCont from './components/Toast/ToastContainer';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <FirstJumbotron />
    <Carousel />
    <DataList />
    <ToastCont />
    <FooterPage />
  </React.StrictMode>,
  document.getElementById('root')
);
