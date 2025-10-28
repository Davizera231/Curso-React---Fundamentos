import { useState } from "react";

const ConditionalRender = () => {

    const [x] = useState(true); 

    const [name, setUser] = useState("Joao");

    return <div>

        <h1>
            Isso sera exibido?
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Se x for false, não!</p>} 
            <h1 >
                if ternário
            {name === "Matheus" ? (<div>O nome é Matheus</div>) : (<div>O nome não é Matheus</div>)} 
            </h1>
            <button onClick={() => setUser("Matheus")}>Mudar nome</button>
        </h1>
    </div>;

};

export default ConditionalRender;