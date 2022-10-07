import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './Post'
import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Rafael"
            content="Em pleno 2022, ano do Elon Musk. Marcha nos projetos. Eu sou apenas um mero camponês."
          />
        </main>
      </div>
    </div>
  )
}
