import { useNavigate } from "react-router-dom"
import { useListaDeParticipantes } from "state/hook/useListaDeParticipantes"
import styles from './Rodape.module.css'


export default function Rodape() {

  const listaParticipante = useListaDeParticipantes()

  const navegacao = useNavigate()

  const iniciar = () => {
    navegacao('/sorteio')
  }

  return (
    <footer className={styles.rodape} >
      <button className={styles.botao} disabled={listaParticipante.length < 3} onClick={iniciar}>Iniciar brincadeira!</button>
      <img src='/imagens/sacolas.png' alt="Sacolas de Compras" />
    </footer>
  )
}