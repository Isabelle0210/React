import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const [usuario, setUsuario] = useState("")
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
