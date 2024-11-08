import { useState, useEffect } from 'react';
import { Operation, OperationResponseFromApi } from '../types';

const Table = () => {
  // Estado para almacenar la lista de operaciones
  const [operations, setOperations] = useState<Operation[]>([]);

  // Solicitud GET al backend para obtener operaciones
  const fetchOperations = (): Promise<OperationResponseFromApi> => {
    return fetch('http://localhost:3000/api/operations')
      .then(res => {

        if (!res.ok) { // Valida el estado de la API
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
      .catch(error => { // Captura cualquier error que ocurra en el proceso completo de fetchOperations
        console.error('Error al cargar las operaciones:', error);
      });

  }, []);

  const handleRefresh = () => {
    fetchOperations()
      .then(data => {
        setOperations(data);
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
      <button onClick={handleRefresh}>Actualizar Datos</button>
    </>
  );
};

export default Table;
