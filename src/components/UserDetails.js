


const UserDetails = ({nome, age, profissao}) => {

    return (
        <div>
            <h2>Detalhes do Usuário</h2>
            <li>Nome: {nome}</li>
            <li>Idade: {age}</li>
            <li>Profissão: {profissao}</li>
            <li>{age >= 18 ? "Maior de idade" : "Menor de idade"}</li>
        </div>
        
    )
}

export default UserDetails;