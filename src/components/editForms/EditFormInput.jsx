import TextField from '@mui/material/TextField';
import UploadButton from '../buttons/UploadButton'; 

function EditFormInput({ edit, editElem, onChange, ucFirst }) {

  return (
    (editElem === "avatar" || editElem === "image") ? (
      <UploadButton elem={editElem} onChange={onChange} ucFirst={ucFirst}/>
    ) : (
      <TextField
        margin="dense"
        id={editElem+"Input"}
        name={editElem}
        label={ucFirst(editElem)}
        type="text"
        fullWidth
        multiline
        variant="outlined"
        value={edit[editElem]}
        onChange={onChange}
      />
    )
  );
}

export default EditFormInput;