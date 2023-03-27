import React, {useState} from 'react'
import  CircleBar from './CircleBar'
import 'semantic-ui-css/semantic.min.css'
import { Icon } from 'semantic-ui-react'
import './Health.css'
import SleepPopup from './SleepPopup'

function Sleep({sleep, setSleepAmount}) {
    const [showSleepPopup, setShowSleepPopup] = useState(false)
    
    const popup = () => {
        setShowSleepPopup(!showSleepPopup);
    }

    const showSleepSettings = () => {

    }

    return(
        <>
            {showSleepPopup && <SleepPopup />}
            <div className="healthtype-container">
                <h1>Sleep</h1>
                <div className="rounded-box">
                    <div className="circlebar-container">
                        <CircleBar amount={sleep} />
                    </div>
                    <div className='text-and-plus-container'>
                        <div>4 / 8 </div>
                        <Icon link circular name='plus' className='box-plus-sign' onClick={popup}/>
                    </div>
                    
                </div>
            </div>
        </>
        
    )
}

export default Sleep;