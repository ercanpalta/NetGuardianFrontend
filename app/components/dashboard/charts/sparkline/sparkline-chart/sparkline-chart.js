import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

export default function SparkLine({data}) {

  return (
    <Stack sx={{ width: '90%' }}>
        <Box sx={{ flexGrow: 1 }}>
          <SparkLineChart
            plotType="bar"
            data={data}
            height={100}
            showHighlight={true}
            showTooltip={true}
          />
        </Box>
      </Stack>
  );
}