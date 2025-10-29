const Events = () => {

    const handleyMyEvent = (e) => {

        console.log(e);
        console.log("Ativando o evento")
    }

    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando isso</h1>
        }else{
            return <h1>Também poderia renderizar isso</h1>
        }
    };

    return (
        <div>
            <div>
                <button onClick={handleyMyEvent}>Meu botão</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou")}>Clique aqui também</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )

}

export default Events;