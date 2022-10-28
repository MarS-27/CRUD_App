import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function HomePage() {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography sx={{ textAlign: "center" }} variant="h1" gutterBottom>
        CRUD App
      </Typography>
    </Box>
  );
}

export default HomePage;