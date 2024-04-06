import React from 'react';

/* ========== Stock Props ========== */
export type TimeSeriesDateProps = ItemsCommonProps;

export type TimeListProps = {
  isLoading: boolean;
  visibleItems: ItemsCommonProps[];
  timeSeriesMetaData: string;
  timeSeriesType: string;
  stocks: TimeSeriesProps;
  stockType: string;
  error: boolean;
  handleTimeSeries: (value: ItemsCommonProps[]) => void;
};

export type TimeSeriesListProps = {
  isLoading: TimeListProps['isLoading'];
  stockType: TimeListProps['stockType'];
  visibleItems: TimeListProps['visibleItems'];
  timeSeriesMetaData: TimeListProps['timeSeriesMetaData'];
  timeSeriesType: TimeListProps['timeSeriesType'];
  stocks?: TimeListProps['stocks'] | null;
  error: TimeListProps['error'];
  handleSetTimeSeries: TimeListProps['handleTimeSeries'];
};

/* ========== Common Props ========== */
export type ItemsCommonProps = {
  date: string;
  open: string;
  open_b?: string;
  high?: string;
  high_b?: string;
  low?: string;
  low_b?: string;
  close?: string;
  close_b?: string;
  volume: string;
  cap?: string;
  style?: React.CSSProperties;
};

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
  isLoading: boolean;
};

export type TimeSeriesProps = {
  [key: string]: {
    [key: string]: {
      [key: string]: string;
    } & {
      [date: string]: {
        [key: string]: string;
      };
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
  timeSeries: ItemsCommonProps[];
};
