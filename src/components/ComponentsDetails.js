



const ComponentsDetails = ({brand, distance, color}) => {
  return (
    <div>
        <h2>
            Detalhes do Componente
        </h2>
        <ul>
            <li>Marca do componente: {brand}</li>
            <li>Distancia: {distance}</li>
            <li>Cor: {color}</li>
        </ul>
        </div>
  )
}
export default ComponentsDetails;