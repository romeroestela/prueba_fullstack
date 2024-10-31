import { useState } from 'react'
import './App.css'

interface Operation{
  id: string,
  marketer_id: number, 
  client_id: number,
  type: 'buy' | 'sell',
  amount: number,
  price: number,
  marketer_name: string,
  client_name: string
}

function App() {
 const [operations] = useState<Operation[]>([])

 const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  
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
