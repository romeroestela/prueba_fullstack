import './style/App.css';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  return (
    <main>
      <aside>
        <h1>Formulario para añadir operaciones</h1>
        <Form />
      </aside>

      <section>
        <h1>Lista de operaciones</h1>
        <Table />
      </section>
    </main>
  );
}

export default App;
