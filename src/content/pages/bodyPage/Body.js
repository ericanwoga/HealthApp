import React, { useState } from "react";
import { Header, Input, Button, Grid } from "semantic-ui-react";
import PageItem from "../../PageItem";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const BodyContent = () => {
  const [weight, setWeight] = useState("");
  const [submittedWeight, setSubmittedWeight] = useState("");
  let data = [];

  const WeightChange = (e) => {
    setWeight(e.target.value);
  };

  const SubmitWeight = () => {
    const parsedWeight = parseInt(weight);
    setSubmittedWeight(parsedWeight);
    data.push({ submittedWeight: parsedWeight });
  };

  const ClearData = () => {
    data = [];
  };

  return (
    <>
      <Header size="small">
        {submittedWeight
          ? `You weighed in at ${submittedWeight} lbs. today!`
          : "Please enter today's weight"}
      </Header>
      <Grid>
        <Grid.Column width={10} columns={3} divided>
          <Input
            fluid
            label={{ basic: true, content: "lbs" }}
            labelPosition="right"
            placeholder="Enter weight..."
            onChange={WeightChange}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button fluid onClick={SubmitWeight}>
            Submit
          </Button>
          <Button fluid onClick={ClearData}>
            Clear
          </Button>
        </Grid.Column>
      </Grid>
    </>
  );
};

const Body = () => {
  return (
    <div>
      <Header>Body</Header>
      <PageItem title="Today's Weight" content={<BodyContent />} />
    </div>
    
  );
};

export default Body;
