import React from 'react';

function UsersPage() {

    const users = [
        {
            name: 'ali',
            surname: 'tan'
        },
        {
            name: 'ahmet',
            surname: 'tan'
        }
    ]

    return <div>
        <ul>
            {users.map((item, key) => {
               return <li key={key}>{item.name} {item.surname}</li>
            })}
        </ul>

    </div>;
}

export default UsersPage;
