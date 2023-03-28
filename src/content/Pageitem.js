import React from 'react';
import { Header, Icon, Grid, Segment, Button} from 'semantic-ui-react'

const PageItem = ({title, moreLabel, content}) => {
    return (
        <Segment basic>
            <Grid>
                <Grid.Column width={10}>
                    <Header size='large' textAlign='left'>{title}</Header>
                </Grid.Column>
                <Grid.Column width={6}>
                    {moreLabel ? ( 
                        <Button basic floated='right' size='small'>
                            {moreLabel}
                            <Icon name='right arrow' />
                        </Button>
                    ): <></> }
                </Grid.Column>
            </Grid>
            <Segment>
                {content}
            </Segment>
        </Segment>
    );
};
    
export default PageItem;