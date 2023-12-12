import styles from '../../styles/componentes.module.css'

export default function Header(){
    return(
        <div id={styles.header}>
            <h1>Laura noticias e etc</h1>
            <nav id={styles.menu}>
                <a href='/'>Home</a>
                <a href='/objetos'>Objetos</a>
                <a href='/desc' >Descrição</a>
            </nav>
        </div> 
    )
}
