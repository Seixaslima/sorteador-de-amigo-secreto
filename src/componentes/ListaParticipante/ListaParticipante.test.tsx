import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import ListaParticipante from "./ListaParticipante"
import { useListaDeParticipantes } from "state/hook/useListaDeParticipantes"

jest.mock('state/hook/useListaDeParticipantes', () => {
  return {
    useListaDeParticipantes: jest.fn()
  }
})

describe('Uma lista vazia', () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([])
  })

  test('deve ser renderizada sem elementos', () => {

    render(
      <RecoilRoot>
        <ListaParticipante />
      </RecoilRoot>
    )

    const itens = screen.queryAllByRole('listitem')
    expect(itens).toHaveLength(0)
  })

})

describe('Uma lista preenchida de participantes', () => {

  const participantes = ['Ana', 'Beatriz']
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
  })

  test('deve ser renderizada com elementos', () => {

    render(
      <RecoilRoot>
        <ListaParticipante />
      </RecoilRoot>
    )

    const itens = screen.queryAllByRole('listitem')
    expect(itens).toHaveLength(participantes.length)
  })

})