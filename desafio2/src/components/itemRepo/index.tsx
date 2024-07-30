import { ItemContainer } from './styles'

export function ItemRepo({repo}) {
  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.hml_url} target='blank'>Ver Repositorio</a> <br />
        <a href="#" className='remover'>Remover</a>
        <hr />
    </ItemContainer>
  )
}
