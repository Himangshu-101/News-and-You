import React, {Component} from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar.js';
import News from './components/News';
import {
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";

  const App = ()=> {
    const pageSize = 5;
        return (
            <div>
                <BrowserRouter>
                    <Navbar/>
                    <Routes>
                        <Route exact path='/' element={<News key='general' pageSize={pageSize} country="in" category="general"/>} />
                        <Route exact path='/Sports-News' element={<News key='sports' pageSize={pageSize} country="in" category="sports"/>} />
                        <Route exact path='/Entertainment-News' element={<News key='entertainment' pageSize={pageSize} country="in" category="entertainment"/>} />
                        <Route exact path='/Business-News'element={<News key='business' pageSize={pageSize} country="in" category="business"/>} />
                        <Route exact path='/Technology-News'element={<News key='technology' pageSize={pageSize} country="in" category="technology"/>} />
                        <Route exact path='/Health-News'element={<News key='health' pageSize={pageSize} country="in" category="health"/>} />
                        <Route exact path='/Science-News' element={<News key='science' pageSize={pageSize} country="in" category="science"/>}/>                    
                    </Routes>
                </BrowserRouter>
            </div>
        )
}

export default App