import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  // schema: 'http://localhost:4000',
  schema: 'https://graphql.org/graphql/',
  documents: ['src/**/*.{ts,tsx}'],
  ignoreNoDocuments: true,
  generates: {
    './src/__generated__/': {
      preset: 'client',
      presetConfig: {
        // gqlTagName: 'gql',
      },
    },
    './src/__generated__/schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true,
      },
    },
  },
}

export default config
