import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post";


import styles from "./App.module.css";
import './global.css';

const posts = [
  { id: 1,
    author : {
      avatarURL : 'https://avatars.githubusercontent.com/u/102997685?v=4',
      name : 'Matheus Magnani',
      role : 'Web Developer'
    },
    content : [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    ],
    publishedAt : new Date('2023-10-26 11:50:00'),
  },

  { id: 2,
    author : {
      avatarURL : 'https://avatars.githubusercontent.com/u/50590091?v=4',
      name : 'Gabriel Moura',
      role : 'Web Developer Senior'
    },
    content : [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'A minha base é muito melhor que a do resto'},

    ],

    publishedAt : new Date('2023-10-10 10:55:00'),
  },
]

export function App() {

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <aside>
           <Sidebar/>
        </aside>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}



