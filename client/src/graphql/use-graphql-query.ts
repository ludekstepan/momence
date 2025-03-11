import { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { useQuery } from '@tanstack/react-query'
import { request } from 'graphql-request'

const url = 'https://graphql.org/graphql/'

export const useGraphQLQuery = <TQuery, TVariables extends object | undefined>(
  document: TypedDocumentNode<TQuery, TVariables>,
  { variables }: { variables: TVariables },
) =>
  useQuery({
    queryKey: [document, variables],
    queryFn: () =>
      request({
        url,
        document,
        variables,
      }),
  })
