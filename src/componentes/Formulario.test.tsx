import { act, fireEvent, render, screen } from "@testing-library/react"
import Formulario from "./Formulario"
import { RecoilRoot } from "recoil"

describe('O comportamento do Formulario.tsx', () => {

  test('Quando o input estiver vazio, novos participantes não podem seradicionados', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    )
    //encontrar input no DOM 
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    //encontrar o botao
    const botao = screen.getByRole('button')

    //garantir que o input esteja no documento
    expect(input).toBeInTheDocument()
    //garantir que o botao esteja desabilitado
    expect(botao).toBeDisabled()
  })

  test('Adicionar um participante caso tenha um nome preenchido', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    )
    //encontrar input no DOM 
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    //encontrar o botao
    const botao = screen.getByRole('button')

    //inserir um valor no imput 
    fireEvent.change(input, { target: { value: 'Ana Vitoria' } })
    //clicar no botao de submeter 
    fireEvent.click(botao)
    //garantir que o input esteja em foco
    expect(input).toHaveFocus()
    //garantir que o imput esteja vazio
    expect(input).toHaveValue("")
  })

  test('Nomes duplicados não podem ser adicionados na lista', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    )
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    const botao = screen.getByRole('button')

    fireEvent.change(input, { target: { value: 'Ana Vitoria' } })
    fireEvent.click(botao)
    fireEvent.change(input, { target: { value: 'Ana Vitoria' } })
    fireEvent.click(botao)

    const mensagemErro = screen.getByRole('alert')

    expect(mensagemErro.textContent).toBe('Nomes duplicados não são permitidos!')
  })

  test('A mensagem desaparece depois do timer', () => {
    jest.useFakeTimers()
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    )
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    const botao = screen.getByRole('button')

    fireEvent.change(input, { target: { value: 'Ana Vitoria' } })
    fireEvent.click(botao)
    fireEvent.change(input, { target: { value: 'Ana Vitoria' } })
    fireEvent.click(botao)

    let mensagemErro = screen.queryByRole('alert')
    expect(mensagemErro).toBeInTheDocument()

    act(() => {
      jest.runAllTimers()
    });

    mensagemErro = screen.queryByRole('alert')
    expect(mensagemErro).toBeNull()

  })
})
