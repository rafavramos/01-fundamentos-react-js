import { Trash, ThumbsUp } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/81692502?v=4" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Joao Pedro</strong>
              <time title="11 de maio Às 8:13" dateTime="2022-05-11 08:13:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Apagar">
              <Trash size={20} />
            </button>
          </header>
          <p>Conteudo</p>
        </div>
        <footer>
          <ThumbsUp />
          Aplaudir <span>20</span>
        </footer>
      </div>
    </div>
  )
}
