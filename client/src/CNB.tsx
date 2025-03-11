import { useFilmsQuery } from './graphql/use-films-query.ts'

export const CNB = () => {
  const { data } = useFilmsQuery({ first: 10 })

  console.log({ data })

  return (
    <div>
      <h1>blah blah</h1>
      {data?.allFilms?.edges?.map(({ node }) => <p>{node.title}</p>)}
    </div>
  )
}
