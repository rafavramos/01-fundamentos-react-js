import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/81692502?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Rafael Ramos</strong>
            <span>Full Stack Developer</span>
          </div>
        </div>

        <time title="11 de maio Às 8:13" dateTime="2022-05-11 08:13:00">
          Publicado a 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          Em pleno 2022, ano de copa do mundo. Eu sou apenas um mero camponês.
          Botei o shape em jogo. Dei um perfil fake meu pra elas seguirem, quero
          um amor de verdade não uma rata que me quer pelo Toguro que sou.
        </p>
        <p>
          Em pleno 2022, ano do amor. Dei um perfil fake meu pra elas seguirem,
          quero um amor de verdade não uma rata que me quer pelo Toguro que sou.
        </p>
        <p>
          Em pleno 2022, ano de eleição. Pré-treino bateu. Botei o shape em
          jogo. Quero um amor de verdade. Acredite nos seus sonhos.
        </p>
        <p>
          <a href="">#rocketseat #shapedealien #shapefalante</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe seu comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  )
}
