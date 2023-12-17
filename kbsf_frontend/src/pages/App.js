// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import API from '../API';
import Navbar from '../components/Navbar';
import ProductCarousel from '../components/ProductCarousel';
import Footer from '../components/Footer';

function App() {
  // const [todoList, setTodoList] = useState([]);
  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  // const [completed, setCompleted] = useState(false);

  // useEffect(
  //   () =>
  //     // {
  //     //   axios
  //     //     .get('http://localhost:8000/api/todos/')
  //     //     .then((res) => {
  //     //       console.log(res.data);
  //     //       setTodoList(res.data);
  //     //     })
  //     //     .catch((err) => {
  //     //       console.log(err);
  //     //     });
  //     // }
  //     refreshTodos,
  //   []
  // );

  // const refreshTodos = () => {
  //   API.get('/')
  //     .then((res) => {
  //       setTodoList(res.data);
  //     })
  //     .catch(console.err);
  // };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   let todo = { title, description, completed };
  //   API.post('/', todo).then(() => refreshTodos());
  // };
  return (
    <div className="App">
      <div>
        <Navbar />
        <ProductCarousel />
        <Footer />
      </div>
    </div>
  );
}

export default App;
