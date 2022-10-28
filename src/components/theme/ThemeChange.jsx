import React, { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ColorModeContext from '../../context/themeContext'

function ThemeButton() {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    return (
        <IconButton 
            sx={{ width: '50px', height: '50px' }} 
            size="large"  
            color="inherit"
            onClick={colorMode.toggleColorMode}
        >
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
    );
}

export default ThemeButton;