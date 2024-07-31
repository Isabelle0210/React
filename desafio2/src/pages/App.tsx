import gitLogo from '../assets/github-mark-white.png';
import Input from '../components/Input';
import { ItemRepo } from '../components/itemRepo';
import {Container} from './styles'; //aqui eu criei um componente chamado Container onde eu estilizei ele no styles.tsx e importei aqui para usar
import { Button } from '../components/button';
import { api } from '../services/api';
import { useState } from 'react';

interface Repo {
  id: number;
  // Adicione outros campos relevantes do repositório conforme necessário
}

function App() {
  const [currentRepo, setCurrentRepo] = useState<string>(''); // Definindo o tipo de currentRepo como string
  const [repos, setRepos] = useState<Repo[]>([]); // Definindo o tipo de repos como um array de objetos Repos

  const handleSearchRepo = async () => {
      const response = await api.get(`repos/${currentRepo}`); // Requisição para a API do GitHub usando o valor do input
      const data = response.data;

      if (data.id) {

        const isExist = repos.find(repo => repo.id === data.id); // Verificando se o repositório já foi adicionado
        if(!isExist) {
          setRepos(prev => [...prev, data]); // Adicionando o repositório ao estado de repos
          setCurrentRepo(''); // Limpando o input após a busca
          return
        }
        alert('Repositório já adicionado!') // Alerta caso o repositório já tenha sido adicionado
      }
  }
  const handleRemoveRepo = (id: number) => {
    const newRepos = repos.filter(repo => repo.id !== id); // Filtrando os repositórios para remover o repositório com o id passado
    setRepos(newRepos); // Atualizando o estado de repos
  }
  return (
    <>
      <Container>
        <img src={gitLogo} width={72} height={72} alt="Logo" />
        <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
        <Button onClick={handleSearchRepo} /> {/* Adicionei onClick para chamar handleSearchRepo */}
        {repos.map(repo => <ItemRepo key={repo.id} repo={repo} handleRemoveRepo={handleRemoveRepo}/>)} {/* Mapeando e renderizando cada ItemRepo com a prop repo */}
      </Container>
    </>
  );
}

export default App;
