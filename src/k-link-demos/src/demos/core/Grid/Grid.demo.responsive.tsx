import React from 'react';
import { Grid } from '@k-link/core';
import { MantineDemo } from '@k-link/ds';
import { ColWrapper as Col } from './_col-wrapper';

const code = `
import { Grid } from '@k-link/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col md={6} lg={3}>1</Grid.Col>
      <Grid.Col md={6} lg={3}>2</Grid.Col>
      <Grid.Col md={6} lg={3}>3</Grid.Col>
      <Grid.Col md={6} lg={3}>4</Grid.Col>
    </Grid>
  );
}
`;

function Demo() {
  return (
    <Grid>
      <Col md={6} lg={3}>
        1
      </Col>
      <Col md={6} lg={3}>
        2
      </Col>
      <Col md={6} lg={3}>
        3
      </Col>
      <Col md={6} lg={3}>
        4
      </Col>
    </Grid>
  );
}

export const responsive: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
