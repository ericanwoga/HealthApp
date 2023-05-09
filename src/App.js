import React, { useState } from 'react'
import { Segment, Container, Button } from 'semantic-ui-react'
import IPhoneBar from './layout/IPhoneBar'
import Navbar from './content/Navbar'
import Learn from './content/pages/learnPage/Learn'
import Health from './content/pages/healthPage/Health'
import Dashboard from './content/pages/dashboardPage/Dashboard'
import Activity from './content/pages/activityPage/Activity'
import Body from './content/pages/bodyPage/Body'
import AppHeading from './heading/AppHeading'
import HeadingPage from './heading/HeadingPage'
import userData from './data/userData.json'
import LoginPage from './content/LoginPage.js'

import Keyboard from 'react-simple-keyboard'
import 'react-simple-keyboard/build/css/index.css'
import './App.css'

const pages = ['Learn', 'Health', 'Dashboard', 'Activity', 'Body']
const importedUserData = userData

const App = () => {
    // Whether or not a use is "logged in".
    const [loggedIn, setLoggedIn] = useState(true)
    // The object that contains all user data and is imported from userData.json. When a user "logs out", any new data is saved back to this react state but not at the file level.
    const [allUsers, setAllUsers] = useState(importedUserData.users)
    // The data of the currently logged in user. It is what is accessed and stored by each component and saved back to the main "allUsers" state on "log out"
    const [userData, setUserData] = useState(allUsers.johnsmith)
    // The heading page that is to be displayed (or none if false)
    const [headingPage, setHeadingPage] = useState(false)
    // The main page that is to be displayed
    const [mainPage, setMainPage] = useState(pages[2])
    // Whether or not the on screen keyboard will be displayed ("onModal", "onNoModal", "off")
    const [keyboardVisible, setKeyboardVisible] = useState('off')
    // The keyboard that is to be displayed
    const [keyboardLayout, setKeyboardLayout] = useState('default')

    // Changes the keyboard layout used when clicking either shift, numbers, or letters
    function handleKeyboardPress (e) {
        e === '{abc}' && setKeyboardLayout('default')
        e === '{shift}' && (keyboardLayout === 'default' ? setKeyboardLayout('shift') : setKeyboardLayout('default'))
        e === '{numbers}' && setKeyboardLayout('numbers')
        e === '{hide}' && setKeyboardVisible('off')
    }

    const bodyHeight = keyboardVisible === 'onNoModal' ? '62%' : '78%'
    const keyboardPadding = keyboardVisible === 'onModal' ? '35%' : ''

    return (
        <>
            <div id="rooty" style={{ scale: '100%', margin: 'auto', height: '1266px', width: '585px', borderRadius: '100px' }}>
                {/* Screen size based on that of a recent iPhone (2532px X 1170px) */}
                <Segment className='phoneContainer' style={{ scale: '100%', fontSize: 'xx-large', padding: '10px', margin: 'auto', height: '1266px', width: '585px', overflow: 'hidden', border: '3px solid black', borderRadius: '100px' }}>
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
                    <Container textAlign='center' style={{ fontSize: '80%', height: bodyHeight, overflow: ('auto'), padding: '1%' }}>
                        { !headingPage
                            ? (
                                (mainPage === 'Learn' && <Learn/>) ||
                                (mainPage === 'Health' && <Health setKeyboardVisible={setKeyboardVisible} userData={userData} setUserData={setUserData}/>) ||
                                (mainPage === 'Dashboard' && <Dashboard setKeyboardVisible={setKeyboardVisible} userData={userData} setUserData={setUserData}/>) ||
                                (mainPage === 'Activity' && <Activity setUserData={setUserData} setKeyboardVisible={setKeyboardVisible} userData={userData}/>) ||
                                (mainPage === 'Body' && <Body setKeyboardVisible={setKeyboardVisible} userData={userData} setUserData={setUserData} />)
                            )
                            : <HeadingPage setUserData={setUserData} setLoggedIn={setLoggedIn} userData={userData} page={headingPage} setIsVisible={setHeadingPage}/>
                        }
                    </Container>
                    <Container textAlign='center' style={{ height: '9%', padding: '1%', marginTop: keyboardPadding }}>
                        <Navbar setKeyboardVisible={setKeyboardVisible} pages={pages} mainPage={mainPage} setMainPage={setMainPage} setHeadingPage={setHeadingPage}/>
                    </Container>
                    <Container textAlign='center' style={{ height: '1%' }}>
                        <IPhoneBar position="bottom"/>
                    </Container>
                </Segment>
            </div>
            {(keyboardVisible === 'onModal' || keyboardVisible === 'onNoModal') && (
                <>
                    <Container textAlign='center' id="rootyOverlay" style={{ position: 'absolute', left: '0', right: '0', top: '30em', scale: '100%', fontSize: 'xx-large', width: '550px', borderRadius: '100px' }}>
                        <Keyboard
                            onKeyPress={(e) => handleKeyboardPress(e)}
                            layoutName={keyboardLayout}
                            layout={{
                                default: [
                                    'q w e r t y u i o p',
                                    'a s d f g h j k l',
                                    '{shift} z x c v b n m {backspace}',
                                    '{numbers} {space} {ent}'
                                ],
                                shift: [
                                    'Q W E R T Y U I O P',
                                    'A S D F G H J K L',
                                    '{shift} Z X C V B N M {backspace}',
                                    '{numbers} {space} {ent}'
                                ],
                                numbers: ['1 2 3', '4 5 6', '7 8 9', '{abc} 0 {backspace}']
                            }}
                            display={{
                                '{space}': 'space',
                                '{numbers}': '123',
                                '{ent}': 'return',
                                '{escape}': 'esc ⎋',
                                '{tab}': 'tab ⇥',
                                '{backspace}': '⌫',
                                '{capslock}': 'caps lock ⇪',
                                '{shift}': '⇧',
                                '{controlleft}': 'ctrl ⌃',
                                '{controlright}': 'ctrl ⌃',
                                '{altleft}': 'alt ⌥',
                                '{altright}': 'alt ⌥',
                                '{metaleft}': 'cmd ⌘',
                                '{metaright}': 'cmd ⌘',
                                '{abc}': 'abc'
                            }}/>
                        <Button size='large' onClick={() => setKeyboardVisible('off')} style={{ width: '300px' }}>Hide Keyboard</Button>
                    </Container>
                    <Container textAlign='center' style={{ position: 'absolute', left: '0', right: '0', top: '35em' }}>
                        <IPhoneBar position="bottom"/>
                    </Container>
                </>
            )}
        </>
    )
}

export default App
