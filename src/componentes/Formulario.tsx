import { useRef, useState } from "react"
import { useAdicionarParticipante } from "../state/hook/useAdicionarParticipante"
import { useMEnsagemDeErro } from "../state/hook/useMensagemDeErro"

export default function Formulario() {

  const [nome, setNome] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const adicionarNome = useAdicionarParticipante()
  const mensagemDeErro = useMEnsagemDeErro()

  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    inputRef.current?.focus();
    adicionarNome(nome)
    setNome('');

  }

  return (
    <form onSubmit={adicionarParticipante}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Insira os nomes dos participantes"
        value={nome}
        onChange={e => setNome(e.target.value)}
      />
      <button disabled={!nome}>adicionar</button>
      {mensagemDeErro && <p role="alert">{mensagemDeErro}</p>}
    </form>
  )
}