import React, { useState, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css'
import SettingPage from './pages/settingPage/SettingPage'
import HelpPage from './pages/helpPage/HelpPage'
import TrophyPage from './pages/trophyPage/TrophyPage'
import UserPage from './pages/userPage/UserPage'
import PageItem from './PageItem';

// Renders the specific Header page if one is selected from the App Heading
const HeadingPage = ({setLoggedIn, userData, page, setIsVisible}) => {
    const [content, setContent] = useState(page)

    useEffect(() => {
        setContent(
            page == "Achievements" && <TrophyPage userData={userData}/> || 
            page == "Help" && <HelpPage userData={userData}/> ||
            page == "Settings" && <SettingPage userData={userData}/> ||
            page == "Profile" && <UserPage setIsVisible={setIsVisible} setLoggedIn={setLoggedIn} userData={userData}/>
        )
    },[page])

    return (
        <PageItem title={page} setIsVisible={setIsVisible} content={content}/>
    )
}

export default HeadingPage;