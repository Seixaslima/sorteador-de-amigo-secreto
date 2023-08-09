export default function Formulario() {
  return (
    <form>
      <input type="text" placeholder="Insira os nomes dos participantes" />
      <button disabled={true}>adicionar</button>
    </form>
  )
}