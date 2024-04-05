/**
 * ALPHA VANTAGE API KEY
 * Replace Here By New API_KEY
 * When It Reaches 25 Request Limit
 */
export const API_KEY = 'demo';
export const QUERY = '/query';

/* Time Series Params */
export const STOCK_TIME_SERIES = 'TIME SERIES';

export const STOCK_TYPE = {
  TIME_SERIES: 'Time Series',
  DIGITAL_CURRENCIES: 'Digital Currencies',
};

export const EQUITY = {
  IBM: 'IBM',
};

export const OUTPUT_SIZE = {
  COMPACT: 'compact',
  FULL: 'full',
};

export const DATA_TYPE = {
  JSON: 'json',
  CSV: 'csv',
};

/* Currencies Params */

export const DIGITAL_CURRENCIES = {
  BTC: 'BTC',
  ETH: 'ETH',
  TRX: 'TRX',
  XLM: 'XLM',
  BNB: 'BNB',
};

/* Metadata Keys */
export const META_DATA = 'Meta Data';

export const TIME_SERIES_TYPE = {
  DAILY: 'TIME_SERIES_DAILY',
  WEEKLY: 'TIME_SERIES_WEEKLY',
  MONTHLY: 'TIME_SERIES_MONTHLY',
};

export const META_DATA_DIGITAL_CURRENCY_TYPE = {
  DAILY: 'DIGITAL_CURRENCY_DAILY',
  WEEKLY: 'DIGITAL_CURRENCY_WEEKLY',
  MONTHLY: 'DIGITAL_CURRENCY_MONTHLY',
};

export const META_DATA_TIME_SERIES_DAILY = 'Time Series (Daily)';
export const META_DATA_TIME_SERIES_WEEKLY = 'Weekly Time Series';
export const META_DATA_TIME_SERIES_MONTHLY = 'Monthly Time Series';

/* Double Check the these parameters */
export const META_DATA_DIGITAL_CURRENCY_DAILY =
  'Time Series (Digital Currency Daily)';
export const META_DATA_DIGITAL_CURRENCY_WEEKLY =
  'Time Series (Digital Currency Weekly)';
export const META_DATA_DIGITAL_CURRENCY_MONTHLY =
  'Time Series (Digital Currency Monthly)';

export const META_DATA_INFORMATION = '1. Information';
export const META_DATA_SYMBOL = '2. Symbol';
export const META_DATA_LAST_REFRESHED = '3. Last Refreshed';
export const META_DATA_OUTPUT_SIZE = '4. Output Size';
export const META_DATA_TIMZONE = '5. Time Zone';

export const DATE_OPEN = '1. open';
export const DATE_HIGH = '2. high';
export const DATE_LOW = '3. low';
export const DATE_CLOSE = '4. close';
export const DATE_VOLUME = '5. volume';
