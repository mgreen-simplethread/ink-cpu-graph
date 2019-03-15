import React, { useState, useEffect } from 'react';
import si from 'systeminformation';
import ColorPipe from 'ink-color-pipe';
import { useInterval } from './lib/hooks';
import { render, Color, Text, Box } from 'ink';

function Demo() {
  const [cpu, setCpu] = useState(0.0);

  useInterval(async () => {
    const { currentload } = await si.currentLoad();
    setCpu(currentload);
  }, 500);

  return (
    <Box padding={2} flexDirection="column">
      <Box>
        <Box width={14}>
          <ColorPipe styles="bold.orange">CPU:</ColorPipe>
        </Box>

        {cpu}
      </Box>
    </Box>
  );
}

render(<Demo />);
