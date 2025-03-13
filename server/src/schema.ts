import { builder } from './builder.ts'
import { fetchDailyRates } from './cnb.ts'
import { DailyRates, Rate } from './types.ts'

const RateRef = builder.objectRef<Rate>('Rate').implement({
  fields: (t) => ({
    amount: t.exposeFloat('amount'),
    code: t.exposeString('code'),
    country: t.exposeString('country'),
    currency: t.exposeString('currency'),
    rate: t.exposeFloat('rate'),
  }),
})

const DailyRatesRef = builder.objectRef<DailyRates>('DailyRates').implement({
  fields: (t) => ({
    date: t.exposeString('date'),
    rates: t.field({
      type: [RateRef],
      resolve: (parent) => parent.rates,
    }),
  }),
})

builder.queryType({
  fields: (t) => ({
    rates: t.field({
      type: DailyRatesRef,
      resolve: () => fetchDailyRates(),
    }),
  }),
})

export const schema = builder.toSchema()
