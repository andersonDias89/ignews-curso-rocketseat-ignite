import {GetStaticProps} from 'next'
import Head from 'next/head'
import styles from './home.module.scss'
import { stripe } from '../services/stripe'

import {SibscribeButton} from '../components/SubscribeButton/index'

interface HomeProps {
  product: {
    priceId: string 
    amount: number
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br/>
            <span>for { product.amount } month</span>
          </p>
          <SibscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding"/>
      </main>
    </>
  )
}



export const getStaticProps: GetStaticProps = async () => {
  // requisição para buscar o produto na api do stripe
  const price = await stripe.prices.retrieve('price_1KtZsfG8nfTirFUnI6R5vGxt')

 const product = {
   priceId: price.id,
   amount: new Intl.NumberFormat('en-us', {
     style: 'currency',
     currency: 'USD',
   }).format(price.unit_amount! / 100),
 }
  
  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24,
  }
}
