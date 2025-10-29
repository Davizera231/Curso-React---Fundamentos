import { useState } from "react";


const ListRender = () => {

    const [list] = useState(['Matheus', 'João', 'Maria', 'Pedro']);

    

    const [users, setUsers] = useState([
      { id: 1, name: 'Matheus', age: 30 },
      { id: 2, name: 'João', age: 25 },
      { id: 3, name: 'Maria', age: 28 },
    ]);
  
    const deleterandom = () => {
      const randomNumber = Math.floor(Math.random() * 4);

      setUsers((prevUsers) =>{
        return prevUsers.filter((user) => randomNumber !== user.id);
      });
    };

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
        <button onClick={deleterandom}>Delete Random User</button>
    </div>
  );
}

export default ListRender;