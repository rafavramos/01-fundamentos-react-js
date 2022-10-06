import { Header } from './components/Header'
import { Post } from './Post'
import './styles.css'

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Rafael"
        content="Em pleno 2022, ano do Elon Musk. Marcha nos projetos. Eu sou apenas um mero camponês."
      />
    </div>
  )
}
