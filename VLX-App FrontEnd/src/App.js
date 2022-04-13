
import './App.css';
import Header from './components/sections/Header';
import Login from './components/sections/Login';
import Section from './components/sections/Section';
import Sellerhome from './components/sections/Sellerhome';
import SellerReg from './components/sections/SellerReg';
import Userhome from './components/sections/Userhome';
import UserReg from './components/sections/UserReg';
import MainMenu from './components/sections/MainMenu';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import Home from './components/sections/Home';
import EditProfile from './components/Pages/EditProfile';
import New from './components/sections/New';
import Footer from './components/sections/Footer.';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Pages/Search';



class App extends React.Component {
  render(){
  return (
    <div className='App'>
      
      <MainMenu/>
     
      
    </div>
    
  );
  }
}

export default App;
