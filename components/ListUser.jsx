import { useState } from "react"

const ListUser = () => {
    const [users, setUsers] = useState([
    {id: 1, name: 'John', age: 20},
    {id: 2, name: 'David', age: 30},
    {id: 3, name: 'Matthew', age: 10},
])
  return (
    users.map((user) =>(
        <li key={user.id}>
            {user.name} - {user.age}
        </li>
    ))

    
    
  )
}

export default ListUser