import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/todos/')
      .then((res) => {
        console.log(res.data);
        setTodoList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <div>
        <p>
          {todoList.map((t) => {
            return <div>{t.title}</div>;
          })}
        </p>
      </div>
    </div>
  );
}

export default App;
