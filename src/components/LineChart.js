import React from 'react';
import asciichart from 'asciichart';
import { Box, Text } from 'ink';

function LineChart({ height = 8, data = [] }) {
  if (data.length < 5) return <Box>Collecting data...</Box>;

  const plot = asciichart.plot(data, { height });

  return <Box>{plot}</Box>;
}

export default LineChart;
