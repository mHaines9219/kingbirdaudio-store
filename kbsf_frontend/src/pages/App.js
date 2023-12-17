// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import API from '../API';
import Navbar from '../components/Navbar/Navbar';
import ProductCarousel from '../components/ProductCarousel/ProductCarousel';
import Footer from '../components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import DetailPage from './DetailPage';
import CategoryPage from './CategoryPage';

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
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/product/:id" element={<DetailPage />} />
        </Routes>
        <ProductCarousel />
        <Footer />
      </div>
    </>
  );
}

export default App;
