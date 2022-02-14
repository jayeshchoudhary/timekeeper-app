import React from "react";
import DurationInput from "../../components/duration-input/duration-input.component";
import TimeKeeperDisplay from "../../components/timeKeeper-display/timeKeeper-display";
import { Link, Typography, Box, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const ScreenA = () => {
  return (
    <Box>
      <Typography variant="h3">ScreenC</Typography>
      <Stack spacing={2} direction="row">
        <Link to={"/screen-a"} component={RouterLink}>
          ScreenA
        </Link>
        <Link to={"/screen-b"} component={RouterLink}>
          ScreenB
        </Link>
      </Stack>
      <DurationInput />
      <TimeKeeperDisplay />
    </Box>
  );
};

export default ScreenA;
