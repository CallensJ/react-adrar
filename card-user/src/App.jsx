// import { useState } from 'react'

import "./App.css";
import Card from "./Card";

const users = [
  {
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    pseudo: "anonymous",
    email: "anon@gmail.fr",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id lorem metus. "
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    pseudo: "batman",
    email: "batman@gmail.fr",
    description: "i'm Batman"
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    pseudo: "superman",
    email: "superman@gmail.fr",
    description: "Supermannnnn ta ta daaaaaa"
  }
];


function App() {
  return (
    <>
      <h1>Liste des Utilisateurs</h1>
      <main>
      {users.map((user, index) => (
        <Card
          key={index}
          avatar={user.avatar}
          pseudo={user.pseudo}
          email={user.email}
          description={user.description}
        />
      ))}
      </main>
    </>
  );
}

export default App;
