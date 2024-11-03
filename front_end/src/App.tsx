import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/form';

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

  return (
    <main>
      <aside>
        <h2>Formulario para añadir operaciones</h2>
        <Form />
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
