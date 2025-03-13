import { createServer } from 'node:http'
import { createYoga } from 'graphql-yoga'
import { schema } from './schema.ts'

// const CNB_URL = 'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt'

const yoga = createYoga({
  schema,
})

const server = createServer(yoga)

server.listen(4000)

console.log('Server listening on port 4000')
