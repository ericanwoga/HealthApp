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
import LoginPage from './content/LoginPage.js'

const pages = ["Learn", "Health", "Dashboard", "Activity", "Body"]
const importedUserData = userData

const App = () => {

    // *** If you would like to set a user without viewing the login prompt each time, set 'loggedIn' to 'useState(true)' and set userData to use the default user you would like to view. ***
    
    // Whether or not a use is "logged in".
    const [loggedIn, setLoggedIn] = useState(false)
    // The object that contains all user data and is imported from userData.json. When a user "logs out", any new data is saved back to this react state but not at the file level.
    const [allUsers, setAllUsers] = useState(importedUserData.users)
    // The data of the currently logged in user. It is what is accessed and stored by each component and saved back to the main "allUsers" state on "log out"
    const [userData, setUserData] = useState(allUsers.janedoe)
    // Specifies the heading page that is to be displayed (or none if false)
    const [headingPage, setHeadingPage] = useState(false)

    return (
        // Screen size based on that of a recent iPhone (2532px X 1170px)
        <Segment className='phoneContainer' style={{scale:'100%', fontSize:'x-large', padding:'10px', margin:'auto', height:'1266px', width:'585px', overflow:'hidden', border:'3px solid black', borderRadius:'100px'}}>
            {/* The login page is a modal and is visible on startup or any time "loggedIn" is false. */}
            <LoginPage setUserData={setUserData} allUsers={allUsers} setAllUsers={setAllUsers} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
            {/* The top iPhone bar consists of the dynamic island, the time, cellular and wifi strength, and battery level */}
            <Container style={{height:'6%', overflow:'hidden'}}>
                <IPhoneBar style='top'/>
            </Container>
            {/* The app header consists of the title and 4 buttons which allow you to select a visible "heading page" */}
            <Container style={{height:'8%', overflow:'hidden', paddingTop:'3%'}}>
                <AppHeading page={headingPage} setPage={setHeadingPage}/>
            </Container>
            {/* If one of the heading pages is not visible/clicked, the page router will take effect and display the proper tab */}
            <Router>
                <Container textAlign='center' style={{height:'78%', overflow:(true ? 'auto' : 'auto'), padding:'1%'}}>
                    { !headingPage ? (
                        <Routes>
                            <Route path='/learn' element={<Learn/>}/>
                            <Route path='/health' element={<Health/>}/>
                            <Route path='/' element={<Dashboard user={userData}/>}/>
                            <Route path='/dashboard' element={<Dashboard user={userData}/>}/>
                            <Route path='/activity' element={<Activity/>}/>
                            <Route path='/body' element={<Body/>}/>
                        </Routes>
                    ) : <HeadingPage setLoggedIn={setLoggedIn} userData={userData} page={headingPage} setIsVisible={setHeadingPage}/> }
                </Container>
                <Container textAlign='center' style={{height:'9%', padding:'1%'}}>
                    <Navbar pages={pages} setHeadingPage={setHeadingPage}/>
                </Container>
            </Router>
            {/* The bottom iPhone bar consists of the fake iPhone "swipe" bar that a user swipes up from to got home or display the recent apps */}
            <Container textAlign='center' style={{height:'1%'}}>
                <IPhoneBar style='bottom'/>
            </Container>
        </Segment>
    )
}

const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);
root.render(<App/>);