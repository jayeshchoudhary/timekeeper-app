import React from "react";
import useTimeKeeperStore from "../../store/timekeeper/timekeeper.store";
import { LocalizationProvider } from "@mui/lab";
import DateTimePicker from "@mui/lab/DateTimePicker";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Box } from "@mui/system";
import { TimeKeeperType } from "../../store/timekeeper/timekeeper.interfaces";

const DurationInput = () => {
  const { timeKeeper, setTimeKeeper } = useTimeKeeperStore();

  const handleDurationChange = (value: Date | null) => {
    if (!value || value.getTime() === timeKeeper.duration) {
      return;
    }
    const duration = new Date(value).getTime();
    const endTime = new Date().getTime();
    const startTime = endTime - duration;

    const currentTimekeeperData = {
      type: TimeKeeperType.CUSTOM,
      duration,
      endTime,
      startTime,
    };

    setTimeKeeper(currentTimekeeperData);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box mt={3}>
        <DateTimePicker
          maxDateTime={new Date(timeKeeper.endTime)}
          label="Duration Time"
          value={new Date(timeKeeper.duration)}
          onChange={handleDurationChange}
          renderInput={(params) => <TextField {...params} />}
          okText="ok"
        />
      </Box>
    </LocalizationProvider>
  );
};

export default DurationInput;
