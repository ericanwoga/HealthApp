import React from 'react'
import { Header, Icon, Grid, Segment, Button } from 'semantic-ui-react'

/*
 * A component file that renders a page item
 *
 * Parameters -
 *   title (String): The title that is displayed on the top header of the modal
 *   content (React Element): The react element to be rendered in the body of the modal
 *   moreLabel (String): The text displayed to the right of the title that
 *   moreAction (Func): The action that is completed when the "more" button is clicked
 */
const PageItem = ({ title, moreLabel, content, moreAction }) => {
    return (
        <Segment basic style={{ fontSize: '70%' }}>
            <Grid>
                <Grid.Column width={10}>
                    <Header size='huge' textAlign='left'>{title}</Header>
                </Grid.Column>
                <Grid.Column width={6}>
                    {moreLabel
                        ? (
                            <Button basic floated='right' size='large' onClick={moreAction}>
                                {moreLabel}
                                <Icon name='right arrow' />
                            </Button>
                        )
                        : <></> }
                </Grid.Column>
            </Grid>
            <Segment style={{ fontSize: '100%' }}>
                {content}
            </Segment>
        </Segment>
    )
}

export default PageItem
