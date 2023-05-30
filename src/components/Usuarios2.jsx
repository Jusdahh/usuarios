import React, { useState, useEffect } from "react";
import UsuariosTabela from "./UsuariosTabela";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setUsuarios(resp))
      .catch((err) => console.log(err));
  }, [url]);
  
  return (
    <div>
      <UsuariosTabela dados={usuarios} outrodado="texto qualquer" />
    </div>
  );
}
