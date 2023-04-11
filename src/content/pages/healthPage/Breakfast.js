import React, { useState } from 'react'
import { Grid, Icon, Header, Input, Label, Segment } from 'semantic-ui-react'
import PageItem from '../../PageItem'
import PageModal from '../../PageModal'
import './Health.css'

const ModalContent = ({ bfList, setBfList }) => {
    const [foodNameError, setfoodNameError] = useState(false)
    const [calorieError, setCalorieError] = useState(false)

    const changeFoodName = (event) => {
        // lets user change the food name
        const val = event.target.value

        if (val === '') {
            setfoodNameError(true)
        } else {
            setfoodNameError(false)
            // setWaterAmount(val)
        }
    }

    const changeCalorieAmount = (event) => {
        // lets user change the calories
        const val = event.target.value

        if (val < 0 || isNaN(val)) {
            setCalorieError(true)
        } else {
            setCalorieError(false)
            // setWaterAmount(val)
        }
    }

    return (
        <>
            <Header>What is the name of this meal?</Header>
            <Input fluid
                onChange={changeFoodName}
                error={foodNameError}
                placeholder='Enter sleep goal'/>
            <Header>How many calories are in this meal?</Header>
            <Input fluid label={{ basic: true, content: 'calories' }}
                labelPosition='right'
                onChange={changeCalorieAmount}
                error={calorieError}
                placeholder='Enter calorie amount'/>
            {calorieError ? <Label basic color='red' pointing prompt >Must be a number 0 or greater</Label> : null}
        </>
    )
}

const BreakfastContent = ({ bfList, setBfList }) => {
    const [showSleepPopup, setShowSleepPopup] = useState(false)
    const list = []

    /*
        const deleteFood = (item, index) => {
        const temp = []
        for (let i = 0; i < bfList.length; i++) {
            if (i !== index) {
                temp.push(bfList[i]) // add foods that do not equal deleted item
            }
        }
        setBfList(temp) // new breakfast list doesn't include deleted item
    }
    */

    bfList.forEach((item, index) => {
        list.push(
            <Grid key={index}>
                <Grid.Column verticalAlign='middle' textalign='center' width={9}>
                    <Segment>{Object.keys(item)[0]}</Segment>
                </Grid.Column>
                <Grid.Column verticalAlign='middle' textalign='center' width={4}>
                    <Segment >{Object.values(item)[0]}</Segment>
                </Grid.Column>
                <Grid.Column verticalAlign='middle' width={1}>
                    <Icon onClick={() => setShowSleepPopup(true)} link circular name='edit' className='box-plus-sign'/>
                    <PageModal
                        title={'Add Breakfast Item'}
                        open={showSleepPopup}
                        setOpen={() => setShowSleepPopup(true)}
                        setClosed={() => setShowSleepPopup(false)}
                        submitAction={() => setShowSleepPopup(false)}
                        cancelAction={() => setShowSleepPopup(false)}
                        content={<ModalContent bfList={bfList} setBfList={setBfList}/>}
                        submitText={'Submit'}
                        cancelText={'Cancel'}
                    />
                </Grid.Column>
                <Grid.Column verticalAlign='middle' width={1}>
                    <Icon link circular name='close' className='box-plus-sign'/>
                </Grid.Column>
            </Grid>
        )
    })

    return (
        list
    )
}

const Breakfast = ({ bfList, setBfList }) => {
    return (
        <PageItem title="Breakfast" content={<BreakfastContent bfList={bfList} setBfList={setBfList}/>}/>
    )
}

export default Breakfast
