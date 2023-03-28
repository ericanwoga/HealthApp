import React from 'react';
import { Header, Icon, Grid, Segment, Button} from 'semantic-ui-react'

const PageItem = ({title, setIsVisible, content}) => {
    return (
        <Segment textAlign='center' style={{height:'100%', overflow:'auto'}}>
            <Grid>
                <Grid.Column width={4}>
                    <Button basic floated='left' size='small' onClick={() => setIsVisible(false)}>
                    <Icon name='left arrow' />
                    Back
                    </Button>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Header size='huge'>{title}</Header>
                </Grid.Column>
                <Grid.Column width={4}/>
            </Grid>
            {content}
        </Segment>
    );
};
    
export default PageItem;