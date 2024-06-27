
import './App.css';


function App() {
  const name = 'Isabelle'
  const newName = name.toUpperCase()
  //aqui deixa a letra maiúscula
  //aqui é onde o código é renderizado
  //o return é o que será renderizado na tela
  //o return só pode retornar um elemento, por isso, se quiser retornar mais de um, é necessário colocar dentro de uma div
  //o className é a classe do css

  function sum (a, b) {
    return a + b
  }
  return (
    <div className="App">
      <h1>Meu primeiro React</h1>
      <p>Testando, {newName}</p>
      <p>Soma: {sum(3,2)}
      </p>
    </div>
  );
}


export default App;
