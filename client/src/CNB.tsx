import { useRatesQuery } from './graphql/use-rates-query.ts'

export const CNB = () => {
  const { data } = useRatesQuery()

  console.log({ data })

  return (
    <div>
      <h1>blah blah</h1>
      <table>
        {data?.rates?.rates?.map(
          ({ amount, code, country, currency, rate }) => (
            <tr>
              <td>{amount}</td>
              <td>{code}</td>
              <td>{country}</td>
              <td>{currency}</td>
              <td>{rate}</td>
            </tr>
          ),
        )}
      </table>
    </div>
  )
}
