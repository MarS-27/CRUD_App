import React from "react";
import useForm from "../../hooks/useForm";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import EditFormInput from "./EditFormInput";

function EditForm({ open, onEditClose, editInfo, onSave }) {
  const { newInfo, keysArr, onFormSubmit, onChange, ucFirst } = useForm(editInfo, onSave);

  return (
    <Dialog open={open} onClose={onEditClose}>
      <DialogTitle>Change contact information</DialogTitle>
        <form action="" onSubmit={onFormSubmit}>
          <DialogContent>
            {keysArr.map((editElem, i) => {
              if (editElem !== "id") {
                return <EditFormInput 
                  key={i}
                  edit={newInfo}
                  editElem={editElem}
                  onChange={onChange}
                  ucFirst={ucFirst}
                />
              }
            })}
          </DialogContent>
          <DialogActions sx={{ justifyContent: "space-between"}}>
            <Button sx={{ width: "100%"}} type="submit" variant="outlined">Save</Button>
            <Button sx={{ width: "100%"}} type="button" variant="contained" onClick={onEditClose}>Cancel</Button>
          </DialogActions>
        </form>
    </Dialog>
  );
}

export default EditForm;