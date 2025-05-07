import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Layout from './components/Layout.jsx';

export default function App (){
    return (
            <BrowserRouter>
            
            <Routes>

                <Route element={<Layout/>}>
                    <Route path="/" element={ <Home />}></Route>
                    <Route path='/about' element={<About/>}></Route>
                    <Route path='/projects' element={<Projects/>}></Route>
                    <Route path='/contact' element={<Contact/>}></Route>

                </Route>
            </Routes>

    </BrowserRouter>

    )

}