import React from "react";
import { Link, Stack, Typography } from "@mui/material";
import DurationInput from "../../components/duration-input/duration-input.component";
import TimeKeeperDisplay from "../../components/timeKeeper-display/timeKeeper-display";
import { Link as RouterLink } from "react-router-dom";
import { Box } from "@mui/system";

const ScreenB = () => {
  return (
    <Box>
      <Typography variant="h3">ScreenB</Typography>
      <Stack spacing={2} direction="row">
        <Link to={"/screen-a"} component={RouterLink}>
          ScreenA
        </Link>
        <Link to={"/screen-c"} component={RouterLink}>
          ScreenC
        </Link>
      </Stack>
      <DurationInput />
      <TimeKeeperDisplay />
    </Box>
  );
};

export default ScreenB;
