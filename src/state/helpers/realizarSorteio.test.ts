import { realizarSorteio } from "./realizarSorteio"

describe('dado um sorteio de amigo secreto', () => {

  test('cada participante não sorteie o propio nome', () => {
    const participantes = [
      'Ana',
      'Maria',
      'Joao',
      'Pedro',
      'Paulo',
      'Lucas',
      'Seixas'
    ]

    const sorteio = realizarSorteio(participantes)
    participantes.forEach(participante => {
      const amigoSecreto = sorteio.get(participante)
      expect(amigoSecreto).not.toEqual(participante)
    })
  })
})