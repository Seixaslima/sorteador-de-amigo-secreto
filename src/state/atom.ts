import { atom } from "recoil";

export const listaParticipanteState = atom<string[]>({
  key: 'listaParticipanteState',
  default: []
})

export const resultadoSorteio = atom<Map<string,string>>({
  key: 'resultadoSorteio',
  default: new Map<string,string>()
})

export const erroState = atom<string>({
  key: 'erroState',
  default: ''
})