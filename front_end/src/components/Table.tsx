import { useState, useEffect } from 'react';
import { Operation, OperationResponseFromApi } from '../types';

const Table = () => {

  //Estado para almacenar la lista de operaciones
  const [operations, setOperations] = useState<Operation[]>([]);

  useEffect(() => {
    // Solicitud GET al backend para obtener operaciones
    const fetchOperations = (): Promise<OperationResponseFromApi> => {
      return fetch('http://localhost:3000/api/operations').then(res => res.json());
    };

    // Llama a fetchOperations y, cuando los datos están disponibles, los almacena en el estado
    fetchOperations()
      .then(data => {
        console.log(data);
        setOperations(data); // Almacenamos las operaciones en el estado
      });

  }, []);

  return(
    <>
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
    </>
  );
};
export default Table;

