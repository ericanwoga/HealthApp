import React, { useState } from "react";
import { Header } from "semantic-ui-react";

const Body = () => {
  const [weight, setWeight] = useState("");

  const weightChange = (event) => {
    setWeight(event.target.value);
  };

  return (
    <div>
      <Header>
        Good Evening,
        <br />
        ___!
      </Header>
      <p>Today's weight is: {weight} lbs</p>
      <input type="number" value={weight} onChange={weightChange} />
    </div>
  );
};

export default Body;
