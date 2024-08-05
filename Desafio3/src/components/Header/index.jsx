
import { Cabecalho } from './Styles'
import { Button } from '../button'

export function Header() {
    return (
        <Cabecalho>
            <div className="container">
                <h1>Dio</h1>
            </div>
            <div className="containerMenu">
                <Button/>
            </div>
        </Cabecalho>
    )
}
