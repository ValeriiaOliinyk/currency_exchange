export interface CurrencyTypes {
  currency: any;
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
