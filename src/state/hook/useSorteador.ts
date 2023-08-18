import { useRecoilValue, useSetRecoilState } from "recoil"
import { listaParticipanteState, resultadoSorteio } from "state/atom"
import { realizarSorteio } from "state/helpers/realizarSorteio"

export const useSorteador = () => {
  const participantes = useRecoilValue(listaParticipanteState)
  const setResultado = useSetRecoilState(resultadoSorteio)
  return () => {

    setResultado(realizarSorteio(participantes))
  }
}