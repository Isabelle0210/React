//um componente é uma função que retorna um html
//jsx é uma sintaxe que mistura html com js
import './global.css'; //importando o css
import style from './App.module.css'; //importando o css

import {Post} from './components/Post';//importando o componente post
import { Header } from './components/Header';//importando o componente header
import { Sidebar } from './components/Sidebar';//importando o componente sidebar
export function App() {
  return (
    <div>
      <Header /> 
      <div className={style.wrapper}>
      <Sidebar />
      <main>
      <Post />
      </main>
      </div>
    </div>
  )
}


