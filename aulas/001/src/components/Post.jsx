import styles from './Post.module.css';




// eslint-disable-next-line react/prop-types
export function Post({author, publishedAt, content}) {
    return( 
        
        <>
            <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://github.com/Isabelle0210.png'/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.rule}</span>
                    </div>
                </div>

                <time dateTime='2024-05-11 08:13:30'>
                    {publisheDateFormatted}
                </time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a>👉 isa.DoctorCare</a></p>
                <p><a>#novoprojeto #nlw #rocketseat</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                placeholder='Deixe seu comentário...'
                />
                <button type='submit'>Comentar</button>
            </form>
        </article>
        </>
        
    );
}