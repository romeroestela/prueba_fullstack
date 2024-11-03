import { useState } from 'react';
const Form = () => {
  //Estado para almacenar los valores ingresados en el formulario
  const [inputValues, setInputValues] = useState({
    marketer_id: '',
    client_id: '',
    type: '',
    amount: '',
    price: '',
  });

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

  return(
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
  );
};

export default Form;