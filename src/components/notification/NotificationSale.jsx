import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function NotificationSale() {
    const [open, setOpen] = React.useState(false);


    const handleClose = () => {
        setOpen(false);
    };
    React.useEffect(() => {
        setTimeout(() => setOpen(true), 2000);
    }, [])

    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}

        >
            {/* <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Modal title
                </DialogTitle> */}
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>

            <img src="https://cf.shopee.vn/file/vn-11134258-7r98o-lxjmkcv3u7rv0a" className="w-96 p-3 bg-transparent rounded-xl" alt="" />

        </BootstrapDialog>

    );
}
