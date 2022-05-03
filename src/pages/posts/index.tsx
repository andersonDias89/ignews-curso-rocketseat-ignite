import styles from './styles.module.scss'
import Head from 'next/head'
import { getPrismicClient } from '../../services/prismic'
import Prismic from '@prismicio/client'

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href='#'>
                        <time>22 de maio de 2022</time>
                        <strong>Titulo do Post</strong>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Blanditiis inventore iure, impedit unde
                            odio natus libero at quo dolorum dicta quibusdam ab vel
                            ad hic similique, cum, nam omnis nihil.
                        </p>
                    </a>

                    <a href='#'>
                        <time>22 de maio de 2022</time>
                        <strong>Titulo do Post</strong>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Blanditiis inventore iure, impedit unde
                            odio natus libero at quo dolorum dicta quibusdam ab vel
                            ad hic similique, cum, nam omnis nihil.
                        </p>
                    </a>

                    <a href='#'>
                        <time>22 de maio de 2022</time>
                        <strong>Titulo do Post</strong>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Blanditiis inventore iure, impedit unde
                            odio natus libero at quo dolorum dicta quibusdam ab vel
                            ad hic similique, cum, nam omnis nihil.
                        </p>
                    </a>
                </div>
            </main>
        </>
    )
}


// export const getStaticProps: GetStaticProps = async () => {
//     const prismic = getPrismicClient()

//     const response = await prismic.query([
//         Prismic.predicates.at('document.type', 'post')
//     ],
//     fetch: ['post.title', 'post.content'],
//     pageSize: 100,
//     )

//     return {
//         props:
//     }
// }