export type CsvShape = [
  dateRow: [string],
  headerRow: [string],
  ...entries: [
    country: string,
    currency: string,
    amount: string,
    code: string,
    rate: string,
  ][],
]

export interface Rate {
  amount: number
  code: string
  country: string
  currency: string
  rate: number
}

export interface DailyRates {
  date: string
  rates: Rate[]
}
