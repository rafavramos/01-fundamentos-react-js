import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import './global.css'
import styles from './App.module.css'
import { Post } from './components/Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https:github.com/rafavramos.png',
      name: 'Rafael Ramos',
      role: 'Full-Stack Developer @NewSpace'
    },
    content: [
      { type: 'paragraph', content: 'Fala Pessoal' },
      {
        type: 'paragraph',
        content:
          'Em pleno 2022, ano da liberdade. Só o caráter vence o shape. Marcha nos projetos. Treine, trabalhe e estude. Cheguei calado ergui meus pesos e fui embora.'
      },
      { type: 'link', content: '#rocketseat #shapedealien #shapefalante' }
    ],
    publishedAt: new Date('2022-05-03 10:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https:github.com/JoaoVitorAlvesR.png',
      name: 'Joa Vitor Alves',
      role: 'Developer @Procer'
    },
    content: [
      { type: 'paragraph', content: 'Fala Pessoal' },
      {
        type: 'paragraph',
        content: 'Em pleno 2022, era da liberdade. Quero um amor de verdade.'
      },
      { type: 'link', content: '#rocketseat #frango #procer' }
    ],
    publishedAt: new Date('2022-09-03 22:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
