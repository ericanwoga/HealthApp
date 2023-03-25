import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Grid, Icon } from 'semantic-ui-react'

const IPhoneBar = ({style}) => {
    if (style == "top") {
        return (
            <Grid centered>
                <Grid.Column width={4} textAlign='center' verticalAlign='middle' style={{paddingTop:'18px'}}>
                    <strong style={{fontSize:'22px', fontWeight:'bold'}}>{new Date().getHours() + ":" + String(new Date().getMinutes()).padStart(2, '0')}</strong>
                </Grid.Column>
                <Grid.Column width={5}>
                    <div style={{padding:'5px', backgroundColor:'black', borderRadius:'30px', width:'100%', height:'40px', }}/>
                </Grid.Column>
                <Grid.Column width={4} textAlign='left' verticalAlign='middle'>
                    <Icon size='large' name='signal'/>
                    <Icon size='large' name='wifi' style={{paddingLeft:'8px'}}/>
                    <Icon size='large' name='battery half' style={{paddingLeft:'16px'}}/>
                </Grid.Column>
            </Grid>
        )
    } else if (style == "bottom") {
        return (
            <Grid centered style={{position:'relative', marginTop:'15px', marginRight:'auto', marginLeft:'auto', backgroundColor:'grey', borderRadius:'20px', width:'55%', height:'10px', }}/>
        )
    }
}

export default IPhoneBar;