import { useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, listaParticipanteState } from "../atom"

export const useAdicionarParticipante = () => {
  const setLista = useSetRecoilState(listaParticipanteState)
  const lista = useRecoilValue(listaParticipanteState)
  const setErro = useSetRecoilState(erroState)

  return (novoNomeParticipante:string) => {

    if(lista.includes(novoNomeParticipante)){
      setErro('Nomes duplicados não são permitidos!')
      setTimeout( () => {
        setErro('')
      },5000)
      return
    }
    return setLista(listaAtual => ([...listaAtual, novoNomeParticipante]))
  }
}