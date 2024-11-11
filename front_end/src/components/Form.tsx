import { useForm } from '../hooks/useForm';
import '../style/Form.css';

const Form = () => {
  // Usa el hook useForm para manejar la lógica del formulario
  const { inputValues, responseMessage, responseClass, handleSubmit, handleChange } = useForm();

  return (
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

      <h3>ID del cliente:</h3>
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
            id="buy"
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
            id="sell"
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
          id="amount"
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
          id="price"
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
