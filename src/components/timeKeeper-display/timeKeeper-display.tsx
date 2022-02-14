import { Box, Typography } from "@mui/material";
import React from "react";
import useTimeKeeperStore from "../../store/timekeeper/timekeeper.store";
import { getDisplayDate } from "../../utils/date.utils";

const TimeKeeperDisplay = () => {
  const { timeKeeper } = useTimeKeeperStore();

  return (
    <Box my={2}>
      <Typography fontWeight={"bold"} variant="h6">
        Timekeeper details
      </Typography>
      <Typography>{`Type: ${timeKeeper.type}`}</Typography>
      <Typography>{`Duration: ${getDisplayDate(
        timeKeeper.duration
      )}`}</Typography>
      <Typography>{`Start Time: ${getDisplayDate(
        timeKeeper.startTime
      )}`}</Typography>
      <Typography>{`End Time: ${getDisplayDate(
        timeKeeper.endTime
      )}`}</Typography>
    </Box>
  );
};

export default TimeKeeperDisplay;
