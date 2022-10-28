import Button from '@mui/material/Button';

function AddButton({ click, page }) {
    return (
        <Button 
            sx={{ 
                display: "block", 
                width: "50%", 
                marginTop: "20px", 
                marginLeft: "auto", 
                marginRight: "auto"
            }} 
            variant="contained" 
            onClick={click}
        >
            Add new {page}
        </Button>
    );
}

export default AddButton;