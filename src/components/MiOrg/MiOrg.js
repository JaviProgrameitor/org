import "./MiOrg.css"

function MiOrg(props) {
  
  //const [nombreVariable, funcionActualizar] = useState(valorInicial)
  //const [mostrar, actualizarMostrar] = useState(true);

  // function manejarClick() {
  //   actualizarMostrar(!mostrar)
  // }


  return <section className="orgSection">
    <h3 className="title">Mi organización</h3>
    <img src="./img/add.png" alt="add" onClick={props.cambiarMostrar} />
  </section>
}

export default MiOrg