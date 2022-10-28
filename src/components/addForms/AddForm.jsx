import React from "react";
import useForm from "../../hooks/useForm";
import "./form.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddFormInput from "./AddFormInput";

function AddForm({ emptyObj, onCancel, onSave}) {
  const { newInfo, keysArr, onFormSubmit, onChange, ucFirst} = useForm(emptyObj, onSave);

  return (
    <form action="" className="contact-form" onSubmit={onFormSubmit}>
      {keysArr.map((emptyElem, i) => {
        return (
          <AddFormInput 
            key={i}
            personInfo={newInfo}
            emptyElem={emptyElem}
            onChange={onChange}
            ucFirst={ucFirst}
          />
        )
      })}
      <Stack spacing={2} direction="row">
        <Button sx={{ width: "100%"}} type="submit" variant="outlined">Save</Button>
        <Button sx={{ width: "100%"}} type="button" variant="contained" onClick={onCancel}>Cancel</Button>
      </Stack>
    </form>
  );
}

export default AddForm;
