import React, { useState } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css'
import { Segment, Container } from 'semantic-ui-react'
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

const pages = ["Learn", "Health", "Dashboard", "Activity", "Body"]

const App = () => {

    const [headingPageVisible, setHeadingPageVisible] = useState(false)
    const [headingPage, setHeadingPage] = useState("none")
    var user = userData.users.johnsmith

    return (
        // Screen size based on that of a recent iPhone (2532px X 1170px)
        <Segment style={{fontSize: 'x-large', padding:'10px', margin:'auto', height:'1266px', width:'585px', overflow:'hidden', border:'3px solid black', borderRadius:'100px'}}>
            <Container style={{height:'6%', overflow:'hidden'}}>
                <IPhoneBar style='top'/>
            </Container>
            <Container style={{height:'8%', overflow:'hidden', paddingTop:'3%'}}>
                <AppHeading page={headingPage} setPage={setHeadingPage} isVisible={headingPageVisible} setIsVisible={setHeadingPageVisible}/>
            </Container>
            <Router>
                <Container textAlign='center' style={{height:'78%', overflow:'auto', padding:'1%'}}>
                    { !headingPageVisible ? (
                        <Routes>
                        <Route path='/learn' element={<Learn/>}/>
                        <Route path='/health' element={<Health/>}/>
                        <Route path='/' element={<Dashboard/>}/>
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
root.render(<App callback={() => console.log("renderered")} />);