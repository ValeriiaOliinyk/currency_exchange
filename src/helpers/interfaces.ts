export interface CurrencyTypes {
  base: string;
  date: string;
  rates: {
    [index: string]: any;
  };
}

export interface InitialValues {
  fromAmount: string | number;
  toAmount: string | number;
}
