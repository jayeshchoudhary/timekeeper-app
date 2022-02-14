export type TimeKeeperStore = {
  timeKeeper: TimeKeeper;
  setTimeKeeper: (timeKeeper: TimeKeeper) => void;
};

export type TimeKeeper = {
  type: TimeKeeperType;
  duration: number;
  startTime: number;
  endTime: number;
};

export enum TimeKeeperType {
  DEFAULT = "DEFAULT",
  CUSTOM = "CUSTOM",
}
