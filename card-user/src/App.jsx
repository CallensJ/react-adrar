// import { useState } from 'react'

import './App.css'
import Card from './Card'

function App() {


  return (
    <>
    <h1>Liste des Utilisateurs</h1> 
     <Card
    avatar="./assets/avatar.jpeg"
    pseudo="anonymous" 
    email="anon@gmail.fr" 
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisl erat, porttitor ac massa tristique, convallis tempus nisi. Sed quis ipsum condimentum, condimentum lectus"
/>
    </>
  )
}

export default App
