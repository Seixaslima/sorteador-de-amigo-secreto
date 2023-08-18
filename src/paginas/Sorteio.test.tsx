import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Sorteio from "./Sorteio"
import { useListaDeParticipantes } from "state/hook/useListaDeParticipantes"
import { useListaSorteada } from "state/hook/useListaSorteada"
import { act } from "react-dom/test-utils"

jest.mock('state/hook/useListaDeParticipantes', () => {
  return {
    useListaDeParticipantes: jest.fn()
  }
})
jest.mock('state/hook/useListaSorteada', () => {
  return {
    useListaSorteada: jest.fn()
  }
})

describe('Na pagina de sorteio', () => {
  const participantes = [
    'Ana',
    'Maria',
    'Pedro'
  ]

  const sorteio = new Map([
    ['Ana', 'Pedro'],
    ['Maria', 'Ana'],
    ['Pedro', 'Maria']
  ])

  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
    (useListaSorteada as jest.Mock).mockReturnValue(sorteio)
  })

  test('todos os participantes podem exibir seu amigo secreto', () => {
    render(<RecoilRoot>
      <Sorteio />
    </RecoilRoot>)

    const opcoes = screen.queryAllByRole('option')
    expect(opcoes).toHaveLength(participantes.length + 1) //pq uma option ja vem de padrão

  })

  test('o amigo secreto é exibido quando solicitado', () => {
    render(<RecoilRoot>
      <Sorteio />
    </RecoilRoot>)

    const select = screen.getByPlaceholderText('Selecione o seu nome')

    fireEvent.change(select, {
      target: {
        value: participantes[0]
      }
    })

    const botao = screen.getByRole('button')

    fireEvent.click(botao)

    const amigoSecreto = screen.getByRole('alert')

    expect(amigoSecreto).toBeInTheDocument()
  })

  test('o amigo secreto sode depois do timeout', () => {
    jest.useFakeTimers()
    render(<RecoilRoot>
      <Sorteio />
    </RecoilRoot>)

    const select = screen.getByPlaceholderText('Selecione o seu nome')
    fireEvent.change(select, {
      target: {
        value: participantes[0]
      }
    })
    const botao = screen.getByRole('button')
    fireEvent.click(botao)

    let amigoSecreto = screen.queryByRole('alert')
    expect(amigoSecreto).toBeInTheDocument()

    act(() => {
      jest.runAllTimers()
    })

    amigoSecreto = screen.queryByRole('alert')
    expect(amigoSecreto).toBeNull()

  })
})