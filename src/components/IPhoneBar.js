import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Button, Container, Icon } from 'semantic-ui-react'

const IPhoneBar = () => {
    return (
        <div>
            <Container textAlign='center' style={{paddingTop:'20px'}}>
                <strong style={{position:'relative', right:'10px', top:'5px', paddingRight:'20px', fontSize:'22px', fontWeight:'bold'}}>10:08</strong>
                <Button color='black' size='huge' style={{borderRadius:'20px', width:'45%', height:'40px'}}/>
                <Icon style={{paddingLeft:'10px'}} size='large' name='signal'/>
                <Icon style={{paddingLeft:'15px'}} size='large' name='wifi'/>
                <Icon style={{paddingLeft:'20px'}} size='large' name='battery half'/>
            </Container>
        </div>
    )
}

export default IPhoneBar;