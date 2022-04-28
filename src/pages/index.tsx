import Head from 'next/head'
import type { NextPage } from 'next'
import styles from './home.module.scss'

import {SibscribeButton} from '../components/SubscribeButton/index'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Inicio - Ig News</title>
      </Head>
      
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>

          <p>
            Get acss to all the publications <br />
            <span>for $9.90 month</span>
          </p>

          <SibscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>

  )
}

export default Home
