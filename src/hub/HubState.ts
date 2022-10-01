import TabType from "../lib/TabType";

export interface HubState {
  sidebar: SidebarState;
  tabs: TabGroupState;
}

export interface SidebarState {
  width: number;
  expanded: string[];
}

export interface TabGroupState {
  selected: number;
  tabs: TabState[];
}

export interface TabState {
  type: TabType;
}

export interface MetadataState {
  type: TabType.Metadata;
}

export interface LineGraphState {
  type: TabType.LineGraph;
  legends: {
    left: {
      lockedRange: [number, number] | null;
      fields: {
        key: string;
        color: string;
        show: boolean;
      }[];
    };
    discrete: {
      fields: {
        key: string;
        color: string;
        show: boolean;
      }[];
    };
    right: {
      lockedRange: [number, number] | null;
      fields: {
        key: string;
        color: string;
        show: boolean;
      }[];
    };
  };
}

export interface TableState {
  type: TabType.Table;
  fields: string[];
}

export interface TimelineVisualizerState {
  type: TabType.Odometry | TabType.Points | TabType.Video;
  fields: (string | null)[];
  options: { [id: string]: any };
}

export interface StatisticsState {
  type: TabType.Statistics;
  fields: (string | null)[];
  selectionType: string;
  selectionRangeMin: number;
  selectionRangeMax: number;
  samplingType: string;
  samplingPeriod: number;
  histogramBins: number;
}
