import React, { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { Popup, Button, Icon } from 'semantic-ui-react'

const DateSelect = ({ date, setDate }) => {
    const [isOpen, setIsOpen] = useState(false)

    const onChange = (val) => {
        if (val !== undefined) {
            setDate(val)
        } else {
            setDate(new Date())
        }
        setIsOpen(false)
    }

    return (
        <Popup
            content={
                <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={onChange}
                />
            }
            open={isOpen}
            onClose={() => setIsOpen(false) }
            onOpen={() => setIsOpen(true) }
            position='bottom center'
            style={{ width: '100%', marginRight: '80px' }}
            on='click'
            pinned
            trigger={
                <Button icon labelPosition='left' size='huge' fluid>
                    <Icon name='calendar alternate'/>
                    {date.toLocaleDateString()}
                </Button>}
        />
    )
}

export default DateSelect
