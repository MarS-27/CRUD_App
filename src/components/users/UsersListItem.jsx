import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Avatar from '@mui/material/Avatar';

function UsersListItem({ user, onDelete, onSelect, onEditOpen }) {
    const onDeleteClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onDelete(user);
    };
      
    const onEditClick = () => {
        onEditOpen();
        onSelect(user);
    }

    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell sx={{ display: "flex", justifyContent: "center" }} align="center">
                <Avatar
                    alt={`${user.name}+${user.surname}`}
                    src={user.avatar}
                    sx={{ width: 56, height: 56 }}
                />
            </TableCell>
            <TableCell align="center" component="th" scope="row">{user.name}</TableCell>
            <TableCell align="center">{user.surname}</TableCell>
            <TableCell align="center">{user.country}</TableCell>
            <TableCell align="center">{user.city}</TableCell>
            <TableCell align="center">
                <Stack sx={{ justifyContent: "center" }} spacing={2} direction="row">
                    <Fab aria-label="edit" size='medium' onClick={onEditClick}>
                        <EditIcon />
                    </Fab>
                    <Fab aria-label="delete" size='medium' onClick={onDeleteClick}>
                        <DeleteIcon />
                    </Fab>  
                </Stack>
            </TableCell>
        </TableRow>
    ); 
}

export default UsersListItem;

