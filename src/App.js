import React, { useState } from 'react'
import { Segment, Container } from 'semantic-ui-react'
import IPhoneBar from './layout/IPhoneBar'
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

const pages = ['Learn', 'Health', 'Dashboard', 'Activity', 'Body']
const importedUserData = userData

const App = () => {
    // Whether or not a use is "logged in".
    const [loggedIn, setLoggedIn] = useState(true)
    // The object that contains all user data and is imported from userData.json. When a user "logs out", any new data is saved back to this react state but not at the file level.
    const [allUsers, setAllUsers] = useState(importedUserData.users)
    // The data of the currently logged in user. It is what is accessed and stored by each component and saved back to the main "allUsers" state on "log out"
    const [userData, setUserData] = useState(allUsers.johnsmith)
    // Specifies the heading page that is to be displayed (or none if false)
    const [headingPage, setHeadingPage] = useState(false)
    // Specifies the main page that is to be displayed
    const [mainPage, setMainPage] = useState(pages[2])

    return (
        <div id="rooty" style={{ scale: '100%', fontSize: 'xx-large', margin: 'auto', height: '1266px', width: '585px', borderRadius: '100px' }}>
            {/* Screen size based on that of a recent iPhone (2532px X 1170px) */}
            <Segment className='phoneContainer' style={{ scale: '100%', fontSize: 'x-large', padding: '10px', margin: 'auto', height: '1266px', width: '585px', overflow: 'hidden', border: '3px solid black', borderRadius: '100px' }}>
                {/* The login page is a modal and is visible on startup or any time "loggedIn" is false. */}
                <LoginPage setUserData={setUserData} allUsers={allUsers} setAllUsers={setAllUsers} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
                {/* The top iPhone bar consists of the dynamic island, the time, cellular and wifi strength, and battery level */}
                <Container style={{ height: '6%', overflow: 'hidden' }}>
                    <IPhoneBar position="top"/>
                </Container>
                {/* The app header consists of the title and 4 buttons which allow you to select a visible "heading page" */}
                <Container style={{ height: '8%', overflow: 'hidden', paddingTop: '3%' }}>
                    <AppHeading page={headingPage} setPage={setHeadingPage}/>
                </Container>
                {/* If one of the heading pages is not visible/clicked, the page router will take effect and display the proper tab */}
                <Container textAlign='center' style={{ height: '78%', overflow: ('auto'), padding: '1%' }}>
                    { !headingPage
                        ? (
                            (mainPage === 'Learn' && <Learn/>) ||
                            (mainPage === 'Health' && <Health/>) ||
                            (mainPage === 'Dashboard' && <Dashboard user={userData}/>) ||
                            (mainPage === 'Activity' && <Activity/>) ||
                            (mainPage === 'Body' && <Body/>)
                        )
                        : <HeadingPage setLoggedIn={setLoggedIn} userData={userData} page={headingPage} setIsVisible={setHeadingPage}/> }
                </Container>
                <Container textAlign='center' style={{ height: '9%', padding: '1%' }}>
                    <Navbar pages={pages} mainPage={mainPage} setMainPage={setMainPage} setHeadingPage={setHeadingPage}/>
                </Container>
                {/* The bottom iPhone bar consists of the fake iPhone "swipe" bar that a user swipes up from to got home or display the recent apps */}
                <Container textAlign='center' style={{ height: '1%' }}>
                    <IPhoneBar position="bottom"/>
                </Container>
            </Segment>
        </div>
    )
}

export default App
