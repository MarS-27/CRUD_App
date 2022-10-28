import React from "react";
import usePage from "../../hooks/usePage";
import { POSTS_PAGE, EMPTY_POST } from "../../constants";
import AddForm from "../addForms/AddForm";
import EditForm from '../editForms/EditForm' 
import Box from '@mui/material/Box';
import PostsList from "./PostsList";
import AddButton from "../buttons/AddButton";
import Loader from "../loader/Loader";


function Posts() {
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
  } = usePage(POSTS_PAGE, EMPTY_POST);

  return (
    <Box sx={{ flexGrow: 1, margin: "20px" }}>
      {isLoading ? <Loader /> : null}
      {!isFormVisible ? (
        <>
          <PostsList
            posts={components}
            onSelect={onComponentSelect}
            onDelete={onComponentDelete}
            onEditOpen={onEditOpen}  
          />
          <AddButton click={onAddNewBtnClick} page={POSTS_PAGE}/>
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
          onSave={onSave}
        />
      ) : null}
    </Box>
  );
}

export default Posts;