import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import "./App.scss"
import Users from './Components/Users';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layouts from './Layouts/Layouts';
import Form from './Form/Form';
import Edit from './Edit/Edit';


export default function App() {
  const [users, setUsers] = useState([
    {
      id: uuidv4(),
      full_name: "John",
      about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In quis eveniet cum. Sed cum necessitatibus magni inventore excepturi perferendis nobis, qui architecto similique pariatur dolores distinctio deserunt explicabo rem maiores. Laborum distinctio non, quos autem obcaecati alias voluptatibus optio odit. Fugit a iure quisquam modi distinctio veritatis harum consequuntur fugiat?",
      email: "john@gmail.com",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { full_name, email, description } = e.target;
    const user = {
      id: uuidv4(),
      full_name: full_name.value,
      email: email.value,
      about: description.value,
    };
    setUsers([...users, user]);
    e.target.reset();
  }


  const deleteItem = (id) => {
    if (users.length > 1) {
      const result = users.filter(elem => elem.id !== id)
      setUsers(result);
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layouts />}>
        <Route index element={<h1> Welcome to my project! </h1>} />
        <Route path="users" element={<Users data={users} deleteItem={deleteItem} />} />
        <Route path="add" element={<Form handleSubmit={handleSubmit} />} />
        <Route path="users/:id" element={<Edit users={users} setUsers={setUsers} />} />
      </Route>
    )
  );


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}
