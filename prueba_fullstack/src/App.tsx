import { useState } from 'react'
import './App.css'

interface Operation{
  id: `${string}-${string}-${string}-${string}`, //Tipo de string que genera crypto.randomUUID(),
  marketer_id: string, 
  client_id: string,
  type: 'buy' | 'sell',
  amount: number,
  price: number,
  marketer_name: string,
  client_name: string
}

const INITIAL_OPERATION: Operation[] = [
  {
    id: crypto.randomUUID(),
    marketer_id: '4875HG',
    client_id : '49584H',
    type: 'buy',
    amount: 45872,
    price: 100000,
    marketer_name: 'Comercializadora 1',
    client_name: 'Comercializadora 2'
  },
  {
    id: crypto.randomUUID(),
    marketer_id: '49584H',
    client_id : '4875HG',
    type: 'sell',
    amount: 45872,
    price: 2558211,
    marketer_name: 'Comercializadora 2',
    client_name: 'Comercializadora 1'
  },
]

function App() {
 const [operations, setOperations] = useState(INITIAL_OPERATION)

 const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  const { elements } = event.currentTarget

  const inputMarketerId = elements.namedItem('marketer_id')
  const isInput = inputMarketerId instanceof HTMLInputElement
  if (!isInput || inputMarketerId == null) return
  
 }

  return (
    <main>
      <aside>
        <h2>Formulario para añadir operaciones</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="marketer_id">
            ID de tu comercializadora: 
            <input
              required
              type="text"
              id="marketer_id"
              name="marketer_id"
              placeholder="ID de tu comercializadora"
            />
          </label>

          <label htmlFor="client_id">
            ID cliente: 
            <input
              required
              type="text"
              id="client_id"
              name="client_id"
              placeholder="Id comercializadora cliente"
            />
          </label>

          <label htmlFor="buy" className="formRadio">
            Compra
            <input
              type="radio"
              name="type"
              value={"buy"}
            />
          </label>

          <label htmlFor="sell" className="formRadio">
            Venta
            <input
              type="radio"
              name="type"
              value="sell"
            />
          </label>

          <label htmlFor="amount">
            Cantidad de gas: 
            <input
              required
              type="number"
              name="amount"
              placeholder="50000"
            />
          </label>

          <label htmlFor="price">
            Precio: 
            <input
              required
              type="number"
              name="price"
              placeholder="50000"
            />
          </label>
          <button>Añadir nueva operación</button>
        </form>
      </aside>

      <section>
        <h2>Lista de operaciones</h2>
        {operations.length === 0 ? (
          <p>Aun no hay operaciones</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Compra o Venta</th>
                <th>Comercializadora</th>
                <th>Cliente</th>
                <th>Cantidad de gas</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {operations.map((operation) => (
                <tr key={operation.id}>
                  <td>{operation.type}</td>
                  <td>{operation.marketer_name}</td>
                  <td>{operation.client_name}</td>
                  <td>{operation.amount}</td>
                  <td>{operation.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        
        )}
      </section>
    </main>
  )
}

export default App
