import { graphql } from '../__generated__'
import { useGraphQLQuery } from './use-graphql-query.ts'

const ratesQuery = graphql(`
  query rates {
    rates {
      date
      rates {
        amount
        code
        country
        currency
        rate
      }
    }
  }
`)

export const useRatesQuery = () => useGraphQLQuery(ratesQuery)
