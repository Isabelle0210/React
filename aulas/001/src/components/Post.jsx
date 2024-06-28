import styles from './Post.module.css';

export function Post(){
    return( 
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://github.com/Isabelle0210.png'/>
                    <div className={styles.authorInfo}>
                        <strong>Isabelle Caroline</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='11 de Maio ás 8:13h ' dateTime='2024-05-11 08:13:30'>Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p> <a>👉 isa.DoctorCare</a></p>
                <p><a>#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    );
}