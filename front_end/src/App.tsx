import { useEffect, useState } from 'react';
import './App.css';

interface Operation{
  id: number,
  marketer_id: number,
  client_id: number,
  type: 'buy' | 'sell',
  amount: number,
  price: number,
  marketer_name: string,
  client_name: string
}

function App() {
  //Estado para almacenar la lista de operaciones
  const [operations, setOperations] = useState<Operation[]>([]);

  //Estado para almacenar los valores ingresados en el formulario
  const [inputValues, setInputValues] = useState({
    marketer_id: '',
    client_id: '',
    type: '',
    amount: '',
    price: '',
  });

  useEffect(() => {
    const fetchOperations = async() => {
      try {
      //Solicitud GET al backend para obeter operaciones
        const response = await fetch('http://localhost:3000/api/operations');
        const data = await response.json();
        setOperations(data); //Almacenamos las operaciones en el estado
      } catch (error) {
        console.error('Error al cargar las operaciones:', error);
      }
    };

    fetchOperations();
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

  };

  //Maneja los cambios en los campos del formulario
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  };

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
              value={inputValues.marketer_id}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="client_id">
            ID cliente:
            <input
              required
              type="text"
              id="client_id"
              name="client_id"
              placeholder="ID comercializadora cliente"
              value={inputValues.client_id}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="buy" className="formRadio">
            Compra
            <input
              type="radio"
              name="type"
              value="buy"
              checked={inputValues.type === 'buy'}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="sell" className="formRadio">
            Venta
            <input
              type="radio"
              name="type"
              value="sell"
              checked={inputValues.type === 'sell'}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="amount">
            Cantidad de gas:
            <input
              required
              type="number"
              name="amount"
              placeholder="50000"
              value={inputValues.amount}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="price">
            Precio:
            <input
              required
              type="number"
              name="price"
              placeholder="50000"
              value={inputValues.price}
              onChange={handleChange}
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
  );
}

export default App;
