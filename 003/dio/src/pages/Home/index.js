import {Header} from '../../components/Header';
import Git from '../../assets/git.png';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className='Conteudo'>
        <img src={Git} alt='Logo do Git' className='background_logo'/>
      </div>
    </div>
  );
}
export default App;