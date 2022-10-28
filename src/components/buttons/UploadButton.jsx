import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function UploadButton({ elem, onChange, ucFirst }) {
    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <Button 
                sx={{ 
                    display: "block", 
                    width: "50%", 
                    marginLeft: "auto", 
                    marginRight: "auto",
                    textAlign: "center",
                }}  
                variant="contained" 
                component="label"
            >
                Upload image
                <input 
                    id={elem+"Input"}
                    hidden
                    name={elem}
                    label={ucFirst(elem)}
                    accept="image/*" 
                    type="file" 
                    onChange={onChange}
                />
            </Button>
        </Stack>
    );
}

export default UploadButton;