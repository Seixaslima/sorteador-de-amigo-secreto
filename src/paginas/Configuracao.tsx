import Card from "componentes/Card";
import Formulario from "componentes/Formulario/Formulario";
import ListaParticipante from "componentes/ListaParticipante/ListaParticipante";
import Rodape from "componentes/Rodape/Rodape";


export default function Configuracao() {
  return (
    <Card>
      <section>
        <h2>Vamos começar!</h2>
        <Formulario />
        <ListaParticipante />
        <Rodape />
      </section>
    </Card>
  )
}