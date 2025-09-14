'use client';
import React, { useState, useEffect } from "react";

type Todos = {
  id: number;
  title: string;
  description: string;
};

export default function HomePage() {
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await fetch('/api/users');
    const data = await res.json();
    setTodos(data);
  };

  const handleCreateTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description }),
    });
    if (res.ok) {
      fetchTodos(); // refresh list
    }
  };

  // const handleDeleteUser = async (id: number) => {
  //   await fetch('/api/users', {
  //     method: 'DELETE',
  //     headers: { 'content-Type': 'application/json' },
  //     body: JSON.stringify({ id }),
  //   });
  //   fetchUsers();// refresh after deletion
  // };

  // const handleUpdateUser = async (id: number) => {
  //   await fetch('/api/users', {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ id, name: newName, email: newEmail }),
  //   });
  //   setEditingId(null);
  //   fetchUsers();  // refresh
  // };

  return (
    <main className="p-8">
      <h1 className="text-center font-italic text-4xl mb-4">Todo List</h1>

      <form onSubmit={handleCreateTodo} className="mb-6">
        <input
          type="text"
          placeholder="Name"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="border p-2 mr-2"
          required
        />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="border p-2 mr-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Todos</button>
      </form>

    <ul>
      {
        todos.map((todo: Todos)=>(
          <li key = {todo.id}>
            <div>
              {todo.title}
              {todo.description}
            </div>
          </li>
        ))
      }
    </ul>
    </main>
  );
}



// async function getData(){
//   const res = await fetch("http://localhost:3000/api/users")
//   const data = await res.json();
//   return data;
// }

// export default async function Home(){
//   const fetchedData = await getData();

//   return (
//     <main className = "absolute text-center top-0 left-0 flex items-center justify-center gap-4 ">
//       <h1 className = "text-red-400">here we go</h1>
//       <div>
//         {fetchedData.message}
//       </div>
//     </main>
//   )
// }

// import HelloClient from "./components/HelloClient";

// export default async function Home(){
//   return (
//     <main>
//       <h1>Next.js 14 API Demo</h1>
//       <HelloClient/>
//     </main>
//   )
// }


// async function getData() {
//   const res = await fetch("http://localhost:3000/api/users/24", {
//     // This is important when calling your own API from server component
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   const data = await res.json(); // <-- Await this!
//   return data;
// }

// export default async function Home() {
//   const fetchedData = await getData();

//   return (
//     <main>
//       <div>
//         <h1>Fetched data from the API</h1>
//         <p>{fetchedData.username}</p>
//         <p>{fetchedData.message}</p>
//       </div>
//     </main>
//   );
// }

