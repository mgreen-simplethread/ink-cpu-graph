import React, { useState, useEffect } from 'react';
import si from 'systeminformation';
import { render, Color, Text, Box } from 'ink';
import ColorPipe from 'ink-color-pipe';
import { useInterval } from './lib/hooks';
import LineChart from './components/LineChart';
import { appendCapped } from './lib/utils';

function Demo({ historyLimit = 30 }) {
  const [cpu, setCpu] = useState(0.0);
  const [cpuHistory, setCpuHistory] = useState([]);

  useInterval(async () => {
    const { currentload } = await si.currentLoad();
    setCpu(currentload);
    setCpuHistory(appendCapped(cpuHistory, cpu, historyLimit));
  }, 500);

  return (
    <Box padding={2} flexDirection="column">
      <Box>
        <Box width={14}>
          <ColorPipe styles="bold.orange">CPU:</ColorPipe>
        </Box>

        {cpu}
      </Box>

      <LineChart data={cpuHistory} />
    </Box>
  );
}

render(<Demo />);
