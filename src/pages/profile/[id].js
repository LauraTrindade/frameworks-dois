
import Header from '../componentes/Header'
import Footer from '../componentes/Footer'
import styles from '../../styles/Home.module.css'

export default function profile({ item = {} }) {
    return (
        <>
            <Header></Header>
            <div id={styles.descricao}>
                <h2>{item.nome}</h2>
                <p>{item.descricao}</p>
            </div>
            <Footer></Footer>
        </>
    )
}


export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=amor')

    const repo = await res.json()
    const item = await repo[context.params.id];
    return {
        props: { item }
    }

})

export async function getStaticPaths() {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=amor')

    const repo = await res.json()
    const users = await repo;
    const paths = users.map((user, index) => {
        return { params: { id: String(index) } };
    });
    return {
        paths,
        fallback: false,
    };

}
