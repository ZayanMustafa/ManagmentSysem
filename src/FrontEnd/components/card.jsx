import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const OverviewCard = ({ title, count }) => {
  return (
    <Box sx={{ minWidth: 275, mb: 2 }}>
      <Card variant="outlined" sx={{ textAlign: 'center', py: 3 }}>
        <CardContent>
          {/* Title */}
          <Typography variant="h6" sx={{ color: 'text.secondary', mb: 1 }}>
            {title}
          </Typography>
          {/* Count */}
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            {count}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default OverviewCard;