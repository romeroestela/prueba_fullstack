import { useState } from 'react';
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
          throw new Error('Error al enviar los datos');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Operación añadida exitosamente:', data);
        setInputValues(initialInputValues);
      })
      .catch((error) => {
        console.error('Error al enviar el formulario:', error);
      });
  };

  // Maneja los cambios en los campos del formulario
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues, // Copia los valores actuales de todos los inputs
      [event.target.name]: event.target.value, // Actualiza solo el input que cambió
    });
  };

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="marketer_id">
            ID de tu comercializadora:
        <input
          required
          type="number"
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
          type="number"
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
  );
};

export default Form;