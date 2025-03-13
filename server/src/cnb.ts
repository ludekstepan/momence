import Papa from 'papaparse'
import { CsvShape, DailyRates } from './types.ts'

/**
 * Parses CSV body and transforms the object shape
 */
export const parseRatesCSV = (body: string): DailyRates => {
  const csv = Papa.parse(body, { delimiter: '|', skipEmptyLines: true })

  const [[dateRow], _unusedHeaderRow, ...entries] = csv.data as CsvShape

  // TODO error handling

  return {
    date: dateRow,
    rates: entries.map(([country, currency, amount, code, rate]) => ({
      amount: parseFloat(amount),
      code,
      country,
      currency,
      rate: parseFloat(rate),
    })),
  }
}

/**
 * Fetches and parses daily rates from CNB
 */
export const fetchDailyRates = async () => {
  const response = await fetch(
    'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt',
  )
  const body = await response.text()
  return parseRatesCSV(body)
}
