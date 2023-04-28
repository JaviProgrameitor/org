import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo/CampoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"

const Formulario = (props) => {

  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");

  const [titulo, actualizarTitulo] = useState("");
  const [color, actualizarColor] = useState("");

  const {registrarColaborador, crearEquipo} = props;

  function manejarEnvio(e) {
    e.preventDefault();
    let datos = {
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo: equipo
    }

    registrarColaborador(datos)
  }

  const manearNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({titulo, colorPrimario: color});
  }

  return <section className="formulario">
    <form onSubmit={manejarEnvio}>
      <h2>Rellena el formulario para crear el colaborador.</h2>
      <Campo titulo="Nombre" placeholder="Ingresar nombre" required valor={nombre} actualizarValor={actualizarNombre} />
      <Campo titulo="Puesto" placeholder="Ingresar puesto" required valor={puesto} actualizarValor={actualizarPuesto} />
      <Campo titulo="Foto" placeholder="Ingresar enlace de foto" required valor={foto} actualizarValor={actualizarFoto} />
      <ListaOpciones valor={equipo} actualizarEquipo={actualizarEquipo} equipos={props.equipos} />
      <Boton texto="Crear" />
    </form>
    <form onSubmit={manearNuevoEquipo}>
      <h2>Rellena el formulario para crear el equipo.</h2>
      <Campo titulo="Titulo" placeholder="Ingresar titulo" required valor={titulo} actualizarValor={actualizarTitulo} />
      <Campo type="color" titulo="Color" placeholder="Ingresar color" required valor={color} actualizarValor={actualizarColor} />
      <Boton texto="Registrar equipo" />
    </form>
  </section>
}

export default Formulario