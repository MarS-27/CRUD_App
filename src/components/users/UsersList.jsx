import React from 'react';
import TableBody from '@mui/material/TableBody';
import UsersListItem from './UsersListItem';

function UsersList({ users, onSelect, onDelete, onEditOpen}) {
    return (
        <TableBody>
          {users.map((user) => (
            <UsersListItem 
                key={user.id}
                user={user}
                onSelect={onSelect}
                onDelete={onDelete}
                onEditOpen={onEditOpen} 
            />
          ))}
        </TableBody>
    ); 
}

export default UsersList;