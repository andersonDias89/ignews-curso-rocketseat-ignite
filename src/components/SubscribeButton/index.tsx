import styles from './styles.module.scss'

interface SibscribeButtonProps {
    priceId: string
}

export const SibscribeButton = ({priceId}: SibscribeButtonProps ) => {
    return (
        <button
            type="button"
            className={styles.sibscribeButton}
        >
            Subscribe now
        </button>
    )
}