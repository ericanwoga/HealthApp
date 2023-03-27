import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import SettingPage from './pages/settingPage/SettingPage'
import HelpPage from './pages/helpPage/HelpPage'
import TrophyPage from './pages/trophyPage/TrophyPage'
import UserPage from './pages/userPage/UserPage'

const HeadingPage = ({page}) => {
    switch(page) {
        case "setting":
            return (<SettingPage/>)
        case "help":
            return (<HelpPage/>)
        case "trophy":
            return (<TrophyPage/>)
        case "user":
            return (<UserPage/>)
    }
}

export default HeadingPage;