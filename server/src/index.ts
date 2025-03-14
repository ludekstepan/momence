import 'dotenv/config'

import { createServer } from 'node:http'
import { createYoga } from 'graphql-yoga'
import { schema } from './schema.ts'

const yoga = createYoga({
  schema,
})

const server = createServer(yoga)

server.listen(4000)

console.log('Server listening on port 4000')
