const Challenge = () => {

const num1 = 5;
const num2 = 10;

console.log(num1, num2);

const sum = (a,b) => {
    return a + b;
}

    return(
        <div>
            <h1>Desafio</h1>
            <button onClick={() => console.log(sum(num1, num2))}>Somar</button>
        </div>
    )

}

export default Challenge;