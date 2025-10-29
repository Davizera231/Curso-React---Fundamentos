



const ComponentsDetails = ({brand, distance, color,new_car}) => {
  return (
    <div>
        <h2>
            Detalhes do Componente
        </h2>
        <ul>
            <li>Marca do componente: {brand} new_car={false}</li>
            <li>Distancia: {distance} new_car={false}</li>
            <li>Cor: {color} new_car={false}</li>
        </ul>
        {new_car && <p>Este é um componente novo!</p>}
        </div>
  )
}
export default ComponentsDetails;