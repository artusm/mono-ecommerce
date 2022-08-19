export const MAXIMUM_IN_CART = 16;

export enum PRICE_FILTER {
  ZERO_TWENTY = 'zt',
  TWENTY_FORTY = 'tf',
  FORTY_EIGHTY = 'fe',
  EIGHTY_PLUS = 'ep',
}

export enum SORT_FILTER {
  PRICE_LOW_HIGH = 'plh',
  PRICE_HIGH_LOW = 'phl',
  NAME = 'name',
}

export const PRICES = [
  { value: PRICE_FILTER.ZERO_TWENTY, label: '0.00$ - 19.99$' },
  { value: PRICE_FILTER.TWENTY_FORTY, label: '20.00$ - 39.99$' },
  { value: PRICE_FILTER.FORTY_EIGHTY, label: '40.00$ - 79.99$' },
  { value: PRICE_FILTER.EIGHTY_PLUS, label: '80.00$+' },
];

export const SORT = [
  { value: SORT_FILTER.PRICE_LOW_HIGH, label: 'Price: low to high' },
  { value: SORT_FILTER.PRICE_HIGH_LOW, label: 'Price: high to low' },
  { value: SORT_FILTER.NAME, label: 'Name' },
];
