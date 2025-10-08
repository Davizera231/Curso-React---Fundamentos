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
        </div>
    )

}

export default Events;