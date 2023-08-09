import { render, screen } from "@testing-library/react"
import Formulario from "./Formulario"


test('Quando o input estiver vazio, novos participantes não podem seradicionados', () => {
  render(<Formulario />)

  //encontrar input no DOM 
  const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

  //encontrar o botao
  const botao = screen.getByRole('button')

  //garantir que o input esteja no documento
  expect(input).toBeInTheDocument()
  //garantir que o botao esteja desabilitado
  expect(botao).toBeDisabled()
})