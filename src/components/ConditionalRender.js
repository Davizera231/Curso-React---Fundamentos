import { useState } from "react";

const ConditionalRender = () => {

    const [x] = useState(true); 

    return <div>

        <h1>
            Isso sera exibido?
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Se x for false, não!</p>} 
        </h1>
    </div>;

};

export default ConditionalRender;