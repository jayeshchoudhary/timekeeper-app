import React from "react";
import DurationInput from "../../components/duration-input/duration-input.component";
import TimeKeeperDisplay from "../../components/timeKeeper-display/timeKeeper-display";
import { Link, Typography, Box, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
// import useTimeKeeperStore from "../../store/timekeeper/timekeeper.store";

const ScreenA = () => {
  //   const { timeKeeper } = useTimeKeeperStore();
  return (
    <Box>
      {/* <p>{timeKeeper.duration}</p>
      <p>{timeKeeper.endTime}</p>
      <p>{timeKeeper.startTime}</p> */}

      <Typography variant="h3">ScreenA</Typography>
      <Stack spacing={2} direction="row">
        <Link to={"/screen-b"} component={RouterLink}>
          ScreenB
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

export default ScreenA;
