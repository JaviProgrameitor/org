import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador.js";
import hexToRgba from "hex-to-rgba"

function Equipo(props) {

  //Destructuración
  const {titulo, colorPrimario, id} = props.datos;
  const {colaboradores, eliminarColaborador, actualizarColor, like} = props;
  const obj = {
    backgroundColor: hexToRgba(colorPrimario, 0.6)
  }

  return <>{colaboradores.length > 0 &&
    <section className="equipo" style={obj}>
      <input 
        type="color"
        className="input-color"
        value={colorPrimario}
        onChange={(event) => {
          actualizarColor(event.target.value, id)
        }}
      />
      <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
      <div className="colaboradores">
        {
          colaboradores.map((colaborador, index) => {
            return <Colaborador 
              datos={colaborador} 
              colorPrimario={colorPrimario} 
              key={index} 
              eliminarColaborador={eliminarColaborador}
              like={like}
              />
          })
        }
      </div>
    </section>
  }</>
}

export default Equipo