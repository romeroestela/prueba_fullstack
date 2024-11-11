import { useState, useEffect } from 'react';
import { Operation, OperationResponseFromApi } from '../types';

export const useOperations = () => {
  // Estado para almacenar las operaciones
  const [operations, setOperations] = useState<Operation[]>([]);

  // Función que realiza la solicitud GET al backend para obtener operaciones
  const fetchOperations = (): Promise<OperationResponseFromApi> => {
    return fetch('http://localhost:3000/api/operations')
      .then(res => {
        if (!res.ok) {
          throw new Error('Error al obtener operaciones');
        }
        return res.json();
      });
  };

  // Llama a fetchOperations cuando el componente se monta
  useEffect(() => {
    fetchOperations()
      .then(data => {
        setOperations(data);
      })
      .catch(error => {
        console.error('Error al cargar las operaciones:', error);
      });
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  // Función para actualizar las operaciones
  const handleRefresh = () => {
    fetchOperations()
      .then(data => {
        setOperations(data);
      })
      .catch(error => {
        console.error('Error al actualizar las operaciones:', error);
      });
  };

  return { operations, handleRefresh };
};
