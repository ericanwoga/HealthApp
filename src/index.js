import React, { useState } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css'
import { Segment, Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IPhoneBar from './Pages/static/IPhoneBar';
import Navbar from './Pages/static/Navbar'
import Learn from './Pages/learnPage/Learn'
import Health from './Pages/healthPage/Health'
import Dashboard from './Pages/dashboardPage/Dashboard'
import Activity from './Pages/activityPage/Activity'
import Body from './Pages/bodyPage/Body'
import AppHeading from './Pages/headingPages/AppHeading'
import HeadingPage from './Pages/headingPages/HeadingPage'


const pages = ["Learn", "Health", "Dashboard", "Activity", "Body"]

const App = () => {

    const [headingPageVisible, setHeadingPageVisible] = useState(false)
    const [headingPage, setHeadingPage] = useState("none")

    return (
        // Screen size based on that of a recent iPhone (2532px X 1170px)
        <Segment style={{fontSize: 'x-large', padding:'10px', margin:'auto', marginTop:'10px', height:'1266px', width:'585px', overflow:'hidden', border:'3px solid black', borderRadius:'100px'}}>
            <IPhoneBar style='top'/>
            <AppHeading page={headingPage} setPage={setHeadingPage} isVisible={headingPageVisible} setIsVisible={setHeadingPageVisible}/>
            <Router>
                <Container textAlign='center' fluid style={{height:'82%', overflow:'auto', padding:'10px'}}>
                    { !headingPageVisible ? (
                        <Routes>
                        <Route path='/learn' element={<Learn/>}/>
                        <Route path='/health' element={<Health/>}/>
                        <Route path='/' element={<Dashboard/>}/>
                        <Route path='/dashboard' element={<Dashboard/>}/>
                        <Route path='/activity' element={<Activity/>}/>
                        <Route path='/body' element={<Body/>}/>
                        </Routes>
                    ) : <HeadingPage page={headingPage}/> }
                </Container>
                <Navbar pages={pages} setHeadingPageVisible={setHeadingPageVisible}/>
            </Router>
            <IPhoneBar style='bottom'/>
        </Segment>
    )
}

const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);
root.render(<App callback={() => console.log("renderered")} />);