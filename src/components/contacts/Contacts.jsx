import React from "react";
import { CONTACTS_PAGE, EMPTY_CONTACT } from "../../constants";
import usePage from "../../hooks/usePage";
import AddForm from "../addForms/AddForm";
import ContactsList from "./ContactsList";            
import EditForm from '../editForms/EditForm' 
import Box from '@mui/material/Box';
import AddButton from "../buttons/AddButton";
import Loader from "../loader/Loader";

function Contacts() {
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
  } = usePage(CONTACTS_PAGE, EMPTY_CONTACT);

  return (
    <Box sx={{ width: '50%', m: 'auto' }}>
      {isLoading ? <Loader /> : null}
      {!isFormVisible ? (
        <>
          <ContactsList
            contacts={components}
            onSelect={onComponentSelect}
            onDelete={onComponentDelete}
            onEditOpen={onEditOpen} 
          />
          <AddButton click={onAddNewBtnClick} page={CONTACTS_PAGE}/>
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
    </Box>
  );
}

export default Contacts;
