import React from 'react';
import { Menu, MenuProps } from 'react-admin';
import { Box, Typography } from '@mui/material';

const MyMenu = (props: MenuProps) => {
    return (
        <Box sx={{ mt: 2 }}>
            <Box sx={{ px: 3, py: 2, mb: 2, backgroundColor: '#020617', display: 'flex', alignItems: 'center', gap: 1.5 }}>
                 <Box sx={{ 
                    width: 32, 
                    height: 32, 
                    bgcolor: '#2563eb', 
                    borderRadius: 1, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontWeight: 700,
                    color: 'white'
                 }}>FS</Box>
                 <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, fontSize: '1.125rem', letterSpacing: '-0.025em' }}>FitAdmin Pro</Typography>
            </Box>
            <Menu {...props} />
        </Box>
    );
};

export default MyMenu;
