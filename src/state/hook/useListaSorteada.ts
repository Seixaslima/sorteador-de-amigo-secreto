import { useRecoilValue } from "recoil"
import { resultadoSorteio } from "state/atom"

export const useListaSorteada = () => {
  return useRecoilValue(resultadoSorteio)
}