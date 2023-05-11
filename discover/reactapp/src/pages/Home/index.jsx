import "./styles.css";
import { Card } from "../../components/Card";
import React, { useState, useEffect } from "react";

export function Home() {
  const [studentName, setStudentName] = useState("");
  // armazenar os dados dos alunos
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({name:'', avatar: ''})
  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };
    setStudents(prevState => [...prevState, newStudent]);
  }

  // useEffect bom para busca informação na API
  useEffect(() => {
    // açoes ou aquilo que eu quero que execute
    fetch('https://api.github.com/users/David-Mateus')
    .then(response => response.json())
    .then(data =>{
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      })
    })
  },[])
  return (
    <>
      <div className="container">
       <header>
        <div>
        <h1>Lista de presença</h1>
        <strong>{user.name}</strong>
        <img src={user.avatar}/>
        </div>
       </header>

        <input
          type="text"
          placeholder="Digite seu nome"
          onChange={(event) => setStudentName(event.target.value)}
        />
        <button type="button" onClick={handleAddStudent}>
          Adicionar
        </button>
        {students.map((student) => (
          <Card 
          key={student.time}
          name={student.name} 
          time={student.time} 
          />
        ))
        }
      </div>
    </>
  );
}
