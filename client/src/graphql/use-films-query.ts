import { graphql } from '../__generated__'
import { useGraphQLQuery } from './use-graphql-query.ts'
import { AllFilmsQueryVariables } from '../__generated__/graphql.ts'

const allFilmsQuery = graphql(`
  query allFilms($first: Int!) {
    allFilms(first: $first) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`)

export const useFilmsQuery = (variables: AllFilmsQueryVariables) =>
  useGraphQLQuery(allFilmsQuery, { variables })
