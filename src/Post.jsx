export function Post(props) {
  return (
    <div>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </div>
  )
}

// Default Exports - export no final
// Vantagens: Pode nomear o componente na importação

// Named Exports - Usa o export na função

//Props - Propriedades são utilizadas para reaproveitar o componente utilizando propriedades difentes na exibição
//props: {author, content}
