import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import SettingPage from './SettingPage'
import HelpPage from './HelpPage'
import TrophyPage from './TrophyPage'
import UserPage from './UserPage'

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