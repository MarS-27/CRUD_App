import React from 'react';
import usePage from "../../hooks/usePage";
import { USERS_PAGE, EMPTY_USER } from "../../constants";
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import UsersList from './UsersList';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AddForm from "../addForms/AddForm";
import EditForm from '../editForms/EditForm';
import Loader from "../Loader/Loader";


function Users() {
  const { components,
    selectedComponent,
    openEdit,
    isFormVisible,
    isLoading,
    onEditOpen,
    onEditClose, 
    onAddNewBtnClick,
    closeForm,
    onComponentSelect,
    onSave,
    onComponentDelete, 
  } = usePage(USERS_PAGE, EMPTY_USER);

  return (
    <TableContainer sx={{ width: '90%', mr: 'auto', ml: 'auto', mt: '20px' }}>
      {isLoading ? <Loader /> : null}
      {!isFormVisible ? (
        <>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Avatar</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Surname</TableCell>
                <TableCell align="center">Country</TableCell>
                <TableCell align="center">City</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <UsersList 
              users={components}
              onSelect={onComponentSelect}
              onDelete={onComponentDelete}
              onEditOpen={onEditOpen} 
            />
          </Table>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Fab color="primary" aria-label="add" onClick={onAddNewBtnClick}>
              <AddIcon />
            </Fab>
          </Box>
        </>
      ) : (
        <AddForm 
          emptyObj={selectedComponent}
          onCancel={closeForm}
          onSave={onSave}
        />
      )}
      {selectedComponent ? (
        <EditForm 
          open={openEdit} 
          onEditClose={onEditClose} 
          editInfo={selectedComponent} 
          onSave={onSave}/>
      ) : null}
    </TableContainer>
  );
}

export default Users;
