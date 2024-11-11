// components/Table.tsx
import { useOperations } from '../hooks/useOperations';
import '../style/Table.css';

const Table = () => {
  const { operations, handleRefresh } = useOperations(); // Usamos el hook aquí

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
