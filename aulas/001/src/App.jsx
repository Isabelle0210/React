//um componente é uma função que retorna um html
//jsx é uma sintaxe que mistura html com js
import './global.css'; //importando o css
import style from './App.module.css'; //importando o css

import {Post} from './components/Post';//importando o componente post
import { Header } from './components/Header';//importando o componente header
import { Sidebar } from './components/Sidebar';//importando o componente sidebar

//autho: {avatar_url: "", name: "", role: ""}
//publishedAt: Date
//content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Isabelle0210.png',
      name: "Isabelle Caroline",
      role: "Web Developer"
    },
    content: [
      {type: "pharagraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "👉 isa.DoctorCare"},
    ],
    publishedAt: new Date("2024-05-11 08:13:30"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "",
      name: "Eduardo Henrique",
      role: "Web Developer"
    },
    content: [
      {type: "pharagraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "👉 edu"},
    ],
    publishedAt: new Date("2024-05-11 08:13:30"),
  },
  

];
//iteração criar uma estrutura de repetição
//map é um método que percorre um array e retorna um novo array
export function App() {
  return (
    <div>
      <Header /> 
      <div className={style.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
          return <Post 
            key={post.id} 
            author={post.author} 
            content={post.content} 
            publishedAt={post.publishedAt} 
            />
        } )}
      </main>
      </div>
    </div>
  )
}


