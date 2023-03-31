import React, { useState } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css'
import { Segment, Container, Icon, Header, Button, Modal } from 'semantic-ui-react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IPhoneBar from './layout/IPhoneBar';
import Navbar from './content/Navbar'
import Learn from './content/pages/learnPage/Learn'
import Health from './content/pages/healthPage/Health'
import Dashboard from './content/pages/dashboardPage/Dashboard'
import Activity from './content/pages/activityPage/Activity'
import Body from './content/pages/bodyPage/Body'
import AppHeading from './heading/AppHeading'
import HeadingPage from './heading/HeadingPage'
import userData from './userData.json'
import LoginPage from './content/LoginPage.js'

const pages = ["Learn", "Health", "Dashboard", "Activity", "Body"]

const App = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState(userData.users.johnsmith)
    const [headingPageVisible, setHeadingPageVisible] = useState(false)
    const [headingPage, setHeadingPage] = useState("")

    return (
        // Screen size based on that of a recent iPhone (2532px X 1170px)
        <Segment className='phoneContainer' style={{scale:'100%', fontSize:'x-large', padding:'10px', margin:'auto', height:'1266px', width:'585px', overflow:'hidden', border:'3px solid black', borderRadius:'100px'}}>
            <LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUser={setUser}/>
            <Container style={{height:'6%', overflow:'hidden'}}>
                <IPhoneBar style='top'/>
            </Container>
            <Container style={{height:'8%', overflow:'hidden', paddingTop:'3%'}}>
                <AppHeading page={headingPage} setPage={setHeadingPage} isVisible={headingPageVisible} setIsVisible={setHeadingPageVisible}/>
            </Container>
            <Router>
                <Container textAlign='center' style={{height:'78%', overflow:(true ? 'auto' : 'auto'), padding:'1%'}}>
                    { !headingPageVisible ? (
                        <Routes>
                        <Route path='/learn' element={<Learn/>}/>
                        <Route path='/health' element={<Health/>}/>
                        <Route path='/' element={<Dashboard user={user}/>}/>
                        <Route path='/dashboard' element={<Dashboard user={user}/>}/>
                        <Route path='/activity' element={<Activity/>}/>
                        <Route path='/body' element={<Body/>}/>
                        </Routes>
                    ) : <HeadingPage page={headingPage} setIsVisible={setHeadingPageVisible}/> }
                </Container>
                <Container textAlign='center' style={{height:'9%', padding:'1%'}}>
                    <Navbar pages={pages} setHeadingPageVisible={setHeadingPageVisible}/>
                </Container>
            </Router>
            <Container textAlign='center' style={{height:'1%'}}>
                <IPhoneBar style='bottom'/>
            </Container>
        </Segment>
    )
}

const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);
root.render(<App/>);