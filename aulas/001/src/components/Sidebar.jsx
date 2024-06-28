
import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';
export function Sidebar() {
    return (
        
        <aside className={styles.sidebar}>
            <img className={styles.cover} src='https://images.unsplash.com/photo-1717620380245-8e476305eb97?q=50&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'alt='Fundo'/>

            <div className={styles.profile}>
                <img className={styles.avatar} src='https://github.com/Isabelle0210.png'/>
                <strong>Isabelle Caroline</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href='#'>
                <PencilLine size={20}/>
                Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}