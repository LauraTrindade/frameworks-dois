import Header from './componentes/Header'
import Footer from './componentes/Footer'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function index() {
  return (
    <>
      <Head>
        <title>Laulinda noticias</title>
      </Head>
      <Header></Header>
      <div id={styles.main}>
        <h1>Boca web</h1>
        <p>O BocaWeb é um portal onde pessoas com deficiência visual terão acesso a informações contidas em imagens por meio de audiodescrição.

          Estamos formando um grande grupo de colaboradores voluntários para criar objetos em audiodescrição.

          Ficou interessado? Faça seu cadastro, navegue pelo portal e depois entre contato conosco caso queira ser um colaborador.</p>
      </div>
      <Footer></Footer>
    </>
  )
}





