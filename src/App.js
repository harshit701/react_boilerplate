import { useEffect, useState } from 'react';
import './App.css';
import 'dotenv/config';

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(`${process.env.API_URL}/todos`);

      const data = (await response.json()).data;

      setTodos(data);
    }

    fetchTodos();
  }, []);

  return (
    <>
      <h1>Hello from App</h1>
      <ul>
        {
          todos.map(todo => <li key={todo.id}>{todo.title}</li>)
        }
      </ul>
    </>
  );
}

export default App;
