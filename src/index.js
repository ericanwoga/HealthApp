import React, { useState } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css'
import { Header } from 'semantic-ui-react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IPhoneBar from './components/IPhoneBar';
import Navbar from './components/Navbar'
import Learn from './components/learn/Learn'
import Health from './components/health/Health'
import Dashboard from './components/Dashboard/Dashboard'
import Activity from './components/activity/Activity'
import Body from './components/body/Body'


const pages = ["Learn", "Health", "Dashboard", "Activity", "Body"]

const App = () => {
    return (
        // Screen size based on that of a recent iPhone (2532px X 1170px)
        <div style={{padding:'10px', position:'relative', top:'10px', left:'10px', height:'1266px', width:'585px', overflow:'hidden', borderStyle:'solid', borderRadius:'100px'}}>
            <IPhoneBar/>
            <Header size='huge' textAlign='center'>Health App</Header>
            <Router>
                <Routes>
                    <Route path='/learn' element={<Learn/>} />
                    <Route path='/health' element={<Health/>} />
                    <Route path='/' element={<Dashboard/>} />
                    <Route path='/dashboard' element={<Dashboard/>} />
                    <Route path='/activity' element={<Activity/>} />
                    <Route path='/body' element={<Body/>} />
                </Routes>
                <Navbar pages={pages}/>
            </Router>
        </div>
    )
}

const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);
root.render(<App callback={() => console.log("renderered")} />);