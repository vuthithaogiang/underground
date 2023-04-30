import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function BackDrop({ openBackDrop }) {
    return (
        <div>
            <Backdrop sx={{ color: '#fff', zIndex: '1111111111' }} open={openBackDrop}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}

export default BackDrop;
