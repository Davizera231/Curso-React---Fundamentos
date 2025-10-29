



const ComponentsDetails = ({brand, distance, color,new_car}) => {
  return (
    <div>
        <h2>
            Detalhes do Componente
        </h2>
        <ul>
            <li>Marca do componente: {brand} {new_car}</li>
            <li>Distancia: {distance} {new_car}</li>
            <li>Cor: {color} {new_car}</li>
        </ul>
        {new_car && <p>Este é um componente novo!</p>}
        </div>
  )
}
export default ComponentsDetails;