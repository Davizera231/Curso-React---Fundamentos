const TemplateExpression = () => {
    
const name = "John";
const data = {
    age:31,
    job: 'Programmer'
}

return (
    <div>
        <h1>Olá {name}, tudo bem?</h1>
        <h2>Você tem {data.age} anos e trabalha como {data.job}</h2>
    </div>

)

}

export default TemplateExpression