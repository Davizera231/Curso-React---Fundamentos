import { useState } from "react";


const ListRender = () => {

    const [list] = useState(['Matheus', 'João', 'Maria', 'Pedro']);

    const [users] = useState([
      { id: 1, name: 'Matheus', age: 30 },
      { id: 2, name: 'João', age: 25 },
      { id: 3, name: 'Maria', age: 28 },
      { id: 4, name: 'Pedro', age: 22 },
    ]);
  
  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.age}
              </li>
          ))}
        </ul>
    </div>
  );
}

export default ListRender;