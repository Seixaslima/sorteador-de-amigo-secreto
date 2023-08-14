import { useRecoilValue } from "recoil"
import { erroState } from "../atom"

export const useMEnsagemDeErro = () => {
  const mensagem = useRecoilValue(erroState)
  return mensagem
}