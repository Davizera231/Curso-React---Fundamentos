const Events = () => {

    const handleyMyEvent = (e) => {

        console.log(e);
        console.log("Ativando o evento")
    }

    return (
        <div>
            <div>
                <button onClick={handleyMyEvent}>Meu botão</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou")}>Clique aqui também</button>
            </div>
        </div>
    )

}

export default Events;