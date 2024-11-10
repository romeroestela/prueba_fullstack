import { useState, useEffect } from 'react';
import '../style/Form.css';

const Form = () => {
  // Definir el estado inicial de los valores del formulario
  const initialInputValues = {
    marketer_id: '',
    client_id: '',
    type: '',
    amount: '',
    price: '',
  };

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
        setInputValues(initialInputValues);
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

  // Este efecto hace que el mensaje de respuesta desaparezca después de 30 segundos
  useEffect(() => {
    if (responseMessage) {
      const timer = setTimeout(() => {
        setResponseMessage(null);
        setResponesClass(null);
      }, 30000);

      return () => clearTimeout(timer); // Limpiar el timer si el componente se desmonta antes
    }
  }, [responseMessage]);

  return(
    <form onSubmit={handleSubmit}>

      {responseMessage && (
        <div className={`feedbackMessage ${responseClass}`}>
          {responseMessage}
        </div>
      )}
      <h3>ID de tu comercializadora:</h3>
      <label htmlFor="marketer_id">
        <input
          required
          type="number"
          id="marketer_id"
          name="marketer_id"
          placeholder="5"
          value={inputValues.marketer_id}
          onChange={handleChange}
        />
      </label>
      <h3>ID cliente:</h3>
      <label htmlFor="client_id">
        <input
          required
          type="number"
          id="client_id"
          name="client_id"
          placeholder="25"
          value={inputValues.client_id}
          onChange={handleChange}
        />
      </label>

      <div className="radio-type">
        <h3>Tipo de Operación:</h3>
        <label htmlFor="buy">
            Compra
          <input
            type="radio"
            id='buy'
            name="type"
            value="buy"
            checked={inputValues.type === 'buy'}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="sell">
            Venta
          <input
            type="radio"
            id='sell'
            name="type"
            value="sell"
            checked={inputValues.type === 'sell'}
            onChange={handleChange}
          />
        </label>
      </div>

      <h3>Cantidad de gas:</h3>
      <label htmlFor="amount">
        <input
          required
          type="number"
          id='amount'
          name="amount"
          placeholder="5000"
          value={inputValues.amount}
          onChange={handleChange}
        />
      </label>

      <h3>Precio:</h3>
      <label htmlFor="price">
        <input
          required
          type="number"
          id='price'
          name="price"
          placeholder="341"
          value={inputValues.price}
          onChange={handleChange}
        />
      </label>
      <button>Añadir nueva operación</button>
    </form>
  );
};

export default Form;