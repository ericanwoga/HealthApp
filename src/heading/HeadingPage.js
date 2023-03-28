import React, { useState, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css'
import SettingPage from './pages/settingPage/SettingPage'
import HelpPage from './pages/helpPage/HelpPage'
import TrophyPage from './pages/trophyPage/TrophyPage'
import UserPage from './pages/userPage/UserPage'
import PageItem from './PageItem';

const HeadingPage = ({page, setIsVisible}) => {
    const [content, setContent] = useState(page)

    useEffect(() => {
        setContent(
            page == "Achievements" && <TrophyPage/> || 
            page == "Help" && <HelpPage/> ||
            page == "Settings" && <SettingPage/> ||
            page == "Profile" && <UserPage/>
        )
    },[page])

    return (
        <PageItem title={page} setIsVisible={setIsVisible} content={content}/>
    )
}

export default HeadingPage;