import create from "zustand";
import { persist } from "zustand/middleware";
import { TimeKeeperStore, TimeKeeperType } from "./timekeeper.interfaces";
import sub from "date-fns/sub";

const getDefaultTimeKeeperData = () => {
  const currentDate = new Date();
  const weekBeforeCurrentDate = sub(currentDate, { days: 7 });
  const startTime = currentDate.getTime() - weekBeforeCurrentDate.getTime();

  return {
    type: TimeKeeperType.DEFAULT,
    duration: weekBeforeCurrentDate.getTime(),
    startTime: startTime,
    endTime: currentDate.getTime(),
  };
};

const useTimeKeeperStore = create<TimeKeeperStore>(
  persist(
    (set) => ({
      timeKeeper: getDefaultTimeKeeperData(),
      setTimeKeeper: (timeKeeper) => {
        set({ timeKeeper });
      },
    }),
    { name: "timekeeperApp" }
  )
);

export default useTimeKeeperStore;
