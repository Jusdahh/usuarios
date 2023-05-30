import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    console.log("Requisitando pelo fetch");
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setUsuarios(resp))
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <div>
      <ul>
      {usuarios.map((item) => {
        return (
          <li key={item.id}>
            <span>{item.name} -- </span>

            <span>{item.email} </span>
          </li>
        );
      })}
      </ul>
    </div>
  );
}
