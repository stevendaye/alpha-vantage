export type LayoutProps = {
  children: React.ReactNode;
};

export type ToastStatusProps =
  | 'error'
  | 'info'
  | 'warning'
  | 'success'
  | 'loading';

export type TimeSeriesProps = {
  [key: string]: {
    [key: string]: string;
  } & {
    [date: string]: {
      [key: string]: string;
    };
  };
};

export type MetadataProps = {
  metaData?: {
    [key: string]: string;
  };
};

export type TimeSeriesDateProps = {
  date: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
};

export type StocksListProps = {
  visibleItems: TimeSeriesDateProps[];
  timeSeriesType: string;
  stocks: TimeSeriesProps;
  error: boolean;
  isLoading: boolean;
  handleTimeSeries: (value: TimeSeriesDateProps[]) => void;
};

export type TimeSeriesListProps = {
  visibleItems: StocksListProps['visibleItems'];
  timeSeriesType: StocksListProps['timeSeriesType'];
  stocks?: StocksListProps['stocks'] | null;
  error: StocksListProps['error'];
  handleTimeSeries: StocksListProps['handleTimeSeries'];
};

export type TabsProps = {
  handleTabClick: (type: string) => void;
};

export type ItemRowProps = {
  date: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  style: React.CSSProperties;
};

export type FooterProps = {
  timeSeriesMetadata: string;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  endIndex: number;
  startIndex: number;
  timeSeries: TimeSeriesDateProps[];
};
