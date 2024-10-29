import { useState } from 'react'
import './App.css'

interface Operation{
  id: `${string}-${string}-${string}-${string}`,
  marketer_id: `${string}-${string}-${string}-${string}`, //Tipo de string que genera crypto.randomUUID(),
  client_id: `${string}-${string}-${string}-${string}`,
  type: 'buy' | 'sell',
  amount: number,
  price: number,
  name: string
}

const INITIAL_OPERATION: Operation[] = [
  {
    id: crypto.randomUUID(),
    marketer_id: crypto.randomUUID(),
    client_id : crypto.randomUUID(),
    type: 'buy',
    amount: 45872,
    price: 100000,
    name: 'Empresa1'
  },
  {
    id: crypto.randomUUID(),
    marketer_id: crypto.randomUUID(),
    client_id : crypto.randomUUID(),
    type: 'sell',
    amount: 45872,
    price: 2558211,
    name: 'Empresa2'
  },
]

function App() {
 const [operations] = useState(INITIAL_OPERATION)

  return (
    <main>
      <aside>
        <h2>Formulario para añadir operaciones</h2>
        <form>
          <label>
            ID de tu comercializadora: 
            <input
              required
              type="text"
              id="marketer_id"
              name="marketer_id"
              placeholder="ID de tu comercializadora"
            />
          </label>

          <label>
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

          <label>
            Cantidad de gas: 
            <input
              required
              type="number"
              name="amount"
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
                  <td>{operation.marketer_id}</td>
                  <td>{operation.client_id}</td>
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
