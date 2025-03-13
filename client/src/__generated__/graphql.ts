/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type DailyRates = {
  __typename?: 'DailyRates';
  date: Scalars['String']['output'];
  rates: Array<Rate>;
};

export type Query = {
  __typename?: 'Query';
  rates: DailyRates;
};

export type Rate = {
  __typename?: 'Rate';
  amount: Scalars['Float']['output'];
  code: Scalars['String']['output'];
  country: Scalars['String']['output'];
  currency: Scalars['String']['output'];
  rate: Scalars['Float']['output'];
};

export type RatesQueryVariables = Exact<{ [key: string]: never; }>;


export type RatesQuery = { __typename?: 'Query', rates: { __typename?: 'DailyRates', date: string, rates: Array<{ __typename?: 'Rate', amount: number, code: string, country: string, currency: string, rate: number }> } };


export const RatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"rates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"rates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"rate"}}]}}]}}]}}]} as unknown as DocumentNode<RatesQuery, RatesQueryVariables>;