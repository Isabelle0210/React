import React, { useEffect, useState } from 'react'

import './App.css'

function App() {


  //useCallback é um hook que serve para memorizar uma função, ele é executado toda vez que o componente é renderizado

  //useMemo é um hook que serve para memorizar um valor, ele é executado toda vez que o componente é renderizado
  //useEffect é um hook que serve para executar efeitos colaterais em componentes funcionais, ele é executado toda vez que o componente é renderizado
  const [usuario, setUsuario] = useState("") //o useState é um hook que cria um estado, o primeiro parametro é o valor inicial do estado e o segundo é uma função que atualiza o estado e retorna um array com o valor atual do estado
  const [count, setCount] = useState(0)
  const [usuarios, setUsuarios] = useState(["joao", "maria", "jose"])
  //aqui eu crio um estado para o usuario e outro para a array de usuarios
  const handleAddUsuario = () => {
    setUsuarios([...usuarios, usuario])
    setUsuario("")
  }//aqui eu crio a função que adiciona um novo usuario a array de usuarios

  useEffect(() => {
    setCount(usuarios.length);
  }, [usuarios])//aqui eu crio um efeito que atualiza o estado count toda vez que o estado usuarios é atualizado


  return (
    <>
      <div>
        <h1>Hello</h1>
        <h3>Total: {count}</h3>
        <div>
          <input type="text" 
            value={usuario} 
            onChange={(e) => setUsuario(e.target.value)}
          />
          <button
          onClick={handleAddUsuario}
          >Click me</button>
        </div>
        {usuarios.map((usuario, index) => (
          <div key={index}>{usuario}</div>
        ))} {/* usuado para exibir a array de usuarios */}
      </div>
    </>
  )
}

export default App
