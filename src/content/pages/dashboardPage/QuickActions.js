import React from 'react';
import { Button, Icon, Grid, Segment, Header } from 'semantic-ui-react'

const QuickActions = () => {
  return (
    <Segment basic>
      <Header size='large' textAlign='left'>Quick Actions</Header>
      <Segment>
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
        </Grid>
      </Segment>
    </Segment>
  );
};
  
export default QuickActions;