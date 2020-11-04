export interface CurrencyTypes {
  currency: any;
  base: string;
  data: string;
  rates: {
    [index: string]: any;
  };
}

export interface InitialValues {
  fromAmount: string | number;
  toAmount: string | number;
}
