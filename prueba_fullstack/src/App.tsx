import './App.css'

function App() {

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
              placeholder="5L4498"
            />
          </label>
          <label>
            ID cliente: 
            <input
              required
              type="text"
              id="marketer_id"
              name="marketer_id"
              placeholder="468DJ"
            />
          </label>

          
          <label htmlFor="buy" className="formRadio">
            Compra
            <input
              type="radio"
              name="type"
            />
          </label>

          <label htmlFor="sell" className="formRadio">
            Venta
            <input
              type="radio"
              name="type"
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
        <ul>
          <li> Operación 1</li>
          <li> Operación 2</li>
          <li> Operación 3</li>
          <li> Operación 4</li>
          <li> Operación 5</li>
        </ul>
      </section>
    </main>
  )
}

export default App
