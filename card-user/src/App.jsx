// import { useState } from 'react'

import "./App.css";
import Card from "./Card";

const users = [
  {
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    pseudo: "anonymous",
    email: "anon@gmail.fr",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id lorem metus. ",
    sexe: "masculin"
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    pseudo: "batman",
    email: "batman@gmail.fr",
    description: "i'm Batman",
    sexe: "masculin"
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    pseudo: "supergirl",
    email: "supergirl@gmail.fr",
    description: "Supergirllllll ta ta daaaaaa",
    sexe: "feminin"
  }
];


function App() {
  return (
    <>
  <main>
      {users.length > 0 && <p>Il y a {users.length} utilisateur(s) inscrit(s) !</p>}
      {users.length > 0 ? (
        <>
          <h1>Liste des Utilisateurs</h1>
          {users.map((user, index) => (
            <div
            key={index}
            style={{ backgroundColor: user.sexe === "masculin" ? "lightblue" : "pink", padding: "10px"}}
            >

              <Card
                
                avatar={user.avatar}
                pseudo={user.pseudo}
                email={user.email}
                description={user.description}
              />
            </div>
          ))}
        </>
      ) : (
        <p>Aucun utilisateur</p>
      )}
    </main>
    </>
  );
}

export default App;
