import { ReactNode } from "react"
import styles from './Card.module.css'

interface ICard {
  children: ReactNode
}

export default function Card({ children }: ICard) {
  return (
    <div className={styles.card}>
      {children}
    </div>
  )
}