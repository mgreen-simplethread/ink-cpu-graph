import React, { useState, useEffect } from 'react';
import { render, Color, Text, Box } from 'ink';

function Demo() {
  const [ones, setOnes] = useState(0);
  const [tens, setTens] = useState(0);

  return (
    <Box padding={2} flexDirection="column">
      <Box>
        <Box width={14}>
          <Color green bold>
            Ones:
          </Color>
        </Box>

        {ones}
      </Box>
      <Box>
        <Box width={14}>
          <Color blue bold>
            Tens:
          </Color>
        </Box>

        {tens}
      </Box>
    </Box>
  );
}

render(<Demo />);
