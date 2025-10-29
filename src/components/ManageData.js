import { useState } from "react";


function ManageData() {
    let someData = 10;

    const [number, setNumber] = useState(15);

  return (
    <div>
      <p>{someData}</p>
      <button onClick={() => (someData = 15)}>Log Data</button>
      <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(20)}>Alterar Valor</button>
      </div>
    </div>

  );
}

export default ManageData;
