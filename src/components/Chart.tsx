import React from "react";
import { Bar } from "react-chartjs-2";

import { chart } from "../helpers/chartData";
import { Container, Title } from "../styles/components";

export const Chart = () => {
  return (
    <>
      <Container>
        <Title>The top 10 most traded currencies in the world</Title>
        <Bar
          data={chart.data}
          width={50}
          height={100}
          options={{
            legend: {
              display: true,
              position: "bottom"
            }
          }}
        />
      </Container>
    </>
  );
};
