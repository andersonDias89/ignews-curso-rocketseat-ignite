import { useSession, signIn } from 'next-auth/react'
import Router, { useRouter } from 'next/router'
import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripe-js'
import styles from './styles.module.scss'

interface SibscribeButtonProps {
    priceId: string
}

export const SibscribeButton = ({ priceId }: SibscribeButtonProps) => {
    const { data: session } = useSession()
    const router = useRouter()

    const handleSubscribe = async () => {

        if (!session) {
            signIn('github')
            return
        }

        if (session.activeSubscription) {
            Router.push('/posts')
            return
        }

        try {
            const response = await api.post('/subscribe')

            const {sessionId} = response.data

            const stripe = await getStripeJs()

            await stripe!.redirectToCheckout({sessionId})
        } catch (err){
           alert(err)
        }
    }

    return (
        <button
            type="button"
            className={styles.sibscribeButton}
            onClick={handleSubscribe}
        >
            Subscribe now
        </button>
    )
}