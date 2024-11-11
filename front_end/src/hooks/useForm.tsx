import { useState, useEffect } from 'react';
import { initialInputValues } from '../config/formInitialValues';

export const useForm = () => {
  // Estado para almacenar los valores ingresados en el formulario
  const [inputValues, setInputValues] = useState(initialInputValues);
  const [responseMessage, setResponseMessage] = useState<string | null>(null); // Estado para el mensaje de feedback
  const [responseClass, setResponesClass] = useState<'success' | 'error' | null>(null);

  // Función que se llama cuando se envía el formulario
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault(); // Evita la recarga de la página

    return fetch('http://localhost:3000/api/operations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        marketer_id: Number(inputValues.marketer_id),
        client_id: Number(inputValues.client_id),
        type: inputValues.type,
        amount: Number(inputValues.amount),
        price: Number(inputValues.price),
      }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(errorData.error || 'Error al enviar los datos');
          });
        }
        return response.json();
      })
      .then(() => {
        setResponseMessage('Operación añadida exitosamente.');
        setResponesClass('success');
        setInputValues(initialInputValues); // Reinicia el formulario
      })
      .catch((error) => {
        setResponseMessage(error.message);
        setResponesClass('error');
      });
  };

  // Maneja los cambios en los campos del formulario
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues, // Copia los valores actuales de todos los inputs
      [event.target.name]: event.target.value, // Actualiza solo el input que cambió
    });
  };

  // Este Effect hace que el mensaje de respuesta desaparezca después de 30 segundos
  useEffect(() => {
    if (responseMessage) {
      const timer = setTimeout(() => {
        setResponseMessage(null);
        setResponesClass(null);
      }, 30000);

      return () => clearTimeout(timer); // Limpiar el timer si el componente se desmonta antes
    }
  }, [responseMessage]);

  return {
    inputValues,
    responseMessage,
    responseClass,
    handleSubmit,
    handleChange,
  };
};
