import './style/App.css';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  return (
    <main>
      <aside>
        <h2>Formulario para añadir operaciones</h2>
        <Form />
      </aside>

      <section>
        <h2>Lista de operaciones</h2>
        <Table />
      </section>
    </main>
  );
}

export default App;
