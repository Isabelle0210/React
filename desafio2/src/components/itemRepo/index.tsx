import { ItemContainer } from './styles'

export function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }
  return (
    <ItemContainer >
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.hml_url} target='blank'>Ver Repositorio</a> <br />
        <a href="#" className='remover' onClick={handleRemove}>Remover</a>
        <hr />
    </ItemContainer>
  )
}
