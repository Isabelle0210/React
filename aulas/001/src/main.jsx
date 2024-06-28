import React from 'react' //coração do react
import ReactDOM from 'react-dom/client' //renderiza o react no DOM
import {App} from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  //chamamos um root para renderizar o App
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //aqui falamos que o App será renderizado no root no caso o root é o id root do index.html
)
