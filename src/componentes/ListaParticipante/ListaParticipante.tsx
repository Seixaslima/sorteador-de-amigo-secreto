import { useListaDeParticipantes } from "state/hook/useListaDeParticipantes"


export default function ListaParticipante() {
  const participantes = useListaDeParticipantes()
  return (
    <ul>
      {participantes.map(participante => <li key={participante}>{participante}</li>)}
    </ul>
  )
}