//para que ele funcione temos que importar ele no App.jsx
import styles from './Header.module.css';

import igniteLogo from '../assets/Ignite.svg';
export function Header(props) {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Ignite" />
            <h2>Ignite Feed</h2>
        </header>
        //no react utilizamos a classe className para adicionar classes css
    );
} 