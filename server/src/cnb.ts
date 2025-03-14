import Papa from 'papaparse'
import { CsvShape, DailyRates } from './types.ts'

const CNB_URL = process.env.CNB_URL!

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
  const response = await fetch(CNB_URL)
  const body = await response.text()
  return parseRatesCSV(body)
}
