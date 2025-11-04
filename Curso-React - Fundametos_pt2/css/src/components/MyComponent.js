import "../styles/MyComponent.css"

const MyComponent = () => {
  return (
    <div>
      <h2>Meu Componente</h2>
      <p>Este é o paragrafo do componente</p>
      <p className="My-comp-paragraph">Este e o paragrafo que não tem propriedade css</p> 
    </div>
  )
}

export default MyComponent
