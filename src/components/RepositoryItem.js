
function RepositoryItem(props) {
  return (
    <li>
    {/* '?' nullish coalescing operator =  É um operador lógico que retorna o seu operando do lado direito quando o seu operador do lado esquerdo é null ou undefined. Caso contrário, ele retorna o seu operando do lado esquerdo. */}
      <strong>{props.repository?.name}</strong>
      <p>{props.repository?.description}</p>

      <a href={props.repository?.link} target="_blank" rel="noreferrer">{props.repository?.link}</a>
    </li>
  );
}

export default RepositoryItem;
