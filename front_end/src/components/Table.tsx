import { useState, useEffect } from 'react';
import { Operation, OperationResponseFromApi } from '../types';
import '../style/Table.css';

const Table = () => {
  // Estado para almacenar la lista de operaciones
  const [operations, setOperations] = useState<Operation[]>([]);

  // Solicitud GET al backend para obtener operaciones
  const fetchOperations = (): Promise<OperationResponseFromApi> => {
    return fetch('http://localhost:3000/api/operations')
      .then(res => {

        if (!res.ok) { // Si la respuesta de la API no es exitosa, lanza un error
          throw new Error('Error al obtener operaciones');
        }
        return res.json();
      });
  };

  // Llama a fetchOperations y, cuando los datos están disponibles, los almacena en el estado
  useEffect(() => {
    fetchOperations()
      .then(data => {
        setOperations(data); // Almacenamos las operaciones en el estado
      })
      .catch(error => { // Si ocurre un error en la solicitud, se muestra en la consola
        console.error('Error al cargar las operaciones:', error);
      }); // El array vacío [] asegura que esto solo se ejecute una vez, al montar el componente

  }, []);

  // Función para actualizar las operaciones, llamada cuando el usuario hace clic en el botón "Actualizar Datos"
  const handleRefresh = () => {
    fetchOperations()
      .then(data => {
        setOperations(data); // Actualiza el estado con las nuevas operaciones obtenidas
      });
  };

  return (
    <>
      {operations.length === 0 ? (
        <p>Aún no hay operaciones</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Comercializadora</th>
              <th>Cliente</th>
              <th>Compra o Venta</th>
              <th>Cantidad de gas</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {operations.map((operation) => (
              <tr key={operation.id}>
                <td>{operation.marketer_name}</td>
                <td>{operation.client_name}</td>
                <td>{operation.type}</td>
                <td>{operation.amount}</td>
                <td>{operation.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button onClick={handleRefresh}>Actualizar Datos</button>
    </>
  );
};

export default Table;
