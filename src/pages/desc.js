import React from "react";
import Link from "next/link";

import Header from './componentes/Header'
import Footer from './componentes/Footer'
import styles from '../styles/objetos.module.css'


export default function objetos({ items }) {
    return (
        <>
            <Header></Header>
            <div id={styles.main}>
                <div>
                    {items.map((obj, index) => (
                        <div key={obj.nome}>
                            <Link href='/profile/[id]' as={`/profile/${index}`}>
                                <h1>{obj.nome}</h1>
                            </Link><p> {obj.descricao} </p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}


export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=amor');
    const repo = await res.json();
    const items = await repo;
    return {
        props: { items }
    }

})



