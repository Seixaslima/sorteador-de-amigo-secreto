import styles from './Sorteio.module.css'
import Card from "componentes/Card"
import { useState } from "react"
import { useListaDeParticipantes } from "state/hook/useListaDeParticipantes"
import { useListaSorteada } from "state/hook/useListaSorteada"

export default function Sorteio() {
  const participantes = useListaDeParticipantes()
  const resultado = useListaSorteada()

  const [participanteDaVez, setParticipanteDaVez] = useState('')
  const [amigoSecreto, setAmigoSecreto] = useState('')

  const sortear = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!)
      setTimeout(() => {
        setAmigoSecreto('')
        setParticipanteDaVez('')
      }, 5000)
    }
  }
  return (
    <Card>
      <section className={styles.sorteio} >
        <form onSubmit={sortear}>
          <select
            className={styles.selecionar}
            name="participanteDaVez"
            id="participanteDaVez"
            placeholder="Selecione o seu nome"
            value={participanteDaVez}
            onChange={e => setParticipanteDaVez(e.target.value)}
          >
            <option>Selecione um participante</option>
            {participantes.map(participante => <option key={participante}>{participante}</option>)}
          </select>

          <p className={styles.texto}>Clique em sortear para ver quem é seu amigo secreto!</p>
          <button className={styles.botaoSortear}>Sortear</button>
        </form>

        {amigoSecreto && <p className={styles.texto} role="alert">{amigoSecreto}</p>}

        <footer className={styles.sorteio}>
          <img src="/imagens/aviao.png" className={styles.aviao} alt="Um desenho de um avião de papel" />
        </footer>
      </section>
    </Card>
  )
}