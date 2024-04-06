import React from 'react';

/* ========== Digital Currencies Props ========== */
export type DigitalSeriesCommonProps = {
  date: string;
  open_a: string;
  open_b: string;
  high_a: string;
  high_b: string;
  low_a: string;
  low_b: string;
  close_a: string;
  close_b: string;
  volume: string;
  cap: string;
};

export type DigitalSeriesDateProps = DigitalSeriesCommonProps;

export type DigitalRowProps = DigitalSeriesCommonProps & {
  style: React.CSSProperties;
};

export type DigitalListProps = {
  visibleItems: DigitalSeriesCommonProps[];
  digitalSeriesType: string;
  stocks: TimeSeriesProps;
  error: boolean;
  isLoading: boolean;
  handleDigitalSeries: (value: DigitalSeriesCommonProps[]) => void;
};

export type DigitalSeriesListProps = {
  visibleItems: DigitalListProps['visibleItems'];
  digitalSeriesType: DigitalListProps['digitalSeriesType'];
  stocks?: DigitalListProps['stocks'] | null;
  error: DigitalListProps['error'];
  handleSetDigitalSeries: DigitalListProps['handleDigitalSeries'];
};

/* ========== Time Series Props ========== */
export type TimeSeriesCommonProps = {
  date: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
};

export type TimeSeriesDateProps = TimeSeriesCommonProps;

export type TimeRowProps = TimeSeriesCommonProps & {
  style: React.CSSProperties;
};

export type TimeListProps = {
  visibleItems: TimeSeriesCommonProps[];
  timeSeriesType: string;
  stocks: TimeSeriesProps;
  error: boolean;
  isLoading: boolean;
  handleTimeSeries: (value: TimeSeriesCommonProps[]) => void;
};

export type TimeSeriesListProps = {
  visibleItems: TimeListProps['visibleItems'];
  timeSeriesType: TimeListProps['timeSeriesType'];
  stocks?: TimeListProps['stocks'] | null;
  error: TimeListProps['error'];
  handleSetTimeSeries: TimeListProps['handleTimeSeries'];
};

/* ========== Common Props ========== */
export type MainHeaderProps = {
  activeTab: string;
  handleStockTypechange: (
    stockType: string,
    serieType: string,
    metadataTye: string,
  ) => void;
  stockType: string;
};

export type HeaderListProps = {
  stockType: MainHeaderProps['stockType'];
};

export type MetadataProps = {
  metaData?: {
    [key: string]: string;
  };
  error: TimeListProps['error'];
};

export type TimeSeriesProps = {
  [key: string]: {
    [key: string]: string;
  } & {
    [date: string]: {
      [key: string]: string;
    };
  };
};

export type LayoutProps = {
  children: React.ReactNode;
};

export type ToastStatusProps =
  | 'error'
  | 'info'
  | 'warning'
  | 'success'
  | 'loading';

export type TabsProps = {
  handleTabClick: (type: string) => void;
  stockType: MainHeaderProps['stockType'];
};

export type FooterProps = {
  timeSeriesMetadata: string;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  endIndex: number;
  startIndex: number;
  timeSeries: TimeSeriesCommonProps[];
};
