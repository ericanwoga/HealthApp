import React from 'react'
import { Button, Icon, Grid } from 'semantic-ui-react'
import PageItem from '../../PageItem'

const QuickActionsContent = () => {
    return (
        <Grid columns={2}>
            <Grid.Row>
                <Grid.Column>
                    <Button fluid size='large' icon labelPosition='left'>
            Track Activity
                        <Icon name='bicycle' />
                    </Button>
                </Grid.Column>
                <Grid.Column>
                    <Button fluid size='large' icon labelPosition='left'>
            Track Meal
                        <Icon name='food' />
                    </Button>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column>
                    <Button fluid size='large' icon labelPosition='left'>
            Track Sleep
                        <Icon name='bed' />
                    </Button>
                </Grid.Column>
                <Grid.Column>
                    <Button fluid size='large' icon labelPosition='left'>
            Track Water
                        <Icon name='tint' />
                    </Button>
                </Grid.Column>
            </Grid.Row>

            {/*
      <Grid.Row>
        <Grid.Column>
          <Button fluid size='large' icon labelPosition='left'>
            Learn Something
            <Icon name='lightbulb outline' />
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button fluid size='large' icon labelPosition='left'>
            Track Mood
            <Icon name='smile' />
          </Button>
        </Grid.Column>
      </Grid.Row>
      */}
        </Grid>
    )
}

const QuickActions = () => {
    return (
        <PageItem title="Quick Actions" moreLabel="Edit Actions" content={<QuickActionsContent/>}/>
    )
}

export default QuickActions
