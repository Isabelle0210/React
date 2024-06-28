
//props é um objeto que contém todos os atributos passados para o componente
//props é somente leitura
//dentro das props vamos receber um objeto com os atributos passados para o componente

export function Post(props) {
    console.log(props);
    return (
    <>
        <strong>{props.author}</strong> 
        <p> {props.content}</p>
    </>
)//aqui estamos acessando o atributo author e content do objeto props e renderizando na tela
}

