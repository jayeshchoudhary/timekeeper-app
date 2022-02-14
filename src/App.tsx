import React, { useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import ScreenA from "./pages/screen-a/screen-a";
import ScreenB from "./pages/screen-b/screen-b";
import ScreenC from "./pages/screen-c/screen-c";
import { Container } from "@mui/material";
import useTimeKeeperStore from "./store/timekeeper/timekeeper.store";
import { TimeKeeperType } from "./store/timekeeper/timekeeper.interfaces";

const App = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const { timeKeeper, setTimeKeeper } = useTimeKeeperStore();

  useEffect(() => {
    const timeKeeperData = { ...timeKeeper };

    const durationTimeFromParams = parseInt(
      searchParams.get("duration") as string
    );

    if (
      durationTimeFromParams &&
      durationTimeFromParams !== timeKeeperData.duration
    ) {
      timeKeeperData.duration = durationTimeFromParams;
      timeKeeperData.type = TimeKeeperType.CUSTOM;
    }

    timeKeeperData.endTime = new Date().getTime();
    timeKeeperData.startTime = timeKeeperData.endTime - timeKeeperData.duration;

    setTimeKeeper(timeKeeperData);
  }, []);

  useEffect(() => {
    setSearchParams({
      duration: timeKeeper.duration.toString(),
      startTime: timeKeeper.startTime.toString(),
      endTime: timeKeeper.endTime.toString(),
    });
  }, [location.pathname, timeKeeper]);

  return (
    <Container>
      <Routes>
        <Route path="/screen-a" element={<ScreenA />} />
        <Route path="/screen-b" element={<ScreenB />} />
        <Route path="/screen-c" element={<ScreenC />} />
        <Route path="*" element={<Navigate to="/screen-a" />} />
      </Routes>
    </Container>
  );
};

export default App;
