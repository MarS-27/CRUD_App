import TextField from '@mui/material/TextField';
import UploadButton from '../buttons/UploadButton';

function AddFormInput({ personInfo, emptyElem, onChange, ucFirst }) {
  return (
    (emptyElem === "avatar" || emptyElem === "image") ? (
      <UploadButton elem={emptyElem} onChange={onChange} ucFirst={ucFirst}/>
    ) : (
      <TextField 
        id={emptyElem+"Input"}
        name={emptyElem}
        label={ucFirst(emptyElem)} 
        type="text"
        variant="outlined" 
        multiline 
        value={personInfo[emptyElem]}
        onChange={onChange}
      />
    )
  )
}

export default AddFormInput;