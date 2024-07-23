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
import { useDispatch, useSelector } from 'react-redux';
import { doLogin, updateStateOpenLogin } from '../../redux-tookit/feater/authenSlice';
import { Password } from '@mui/icons-material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function Login() {
    // const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const { isOpenLogin } = useSelector((state) => state.authenSlice)
    const [dataLogin, setDataLogin] = React.useState({
        username: '',
        password: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataLogin({
            ...dataLogin,
            [name]: value,
        })
    }
    const handleSubmit = () => {
        dispatch(doLogin(dataLogin));
    }
    const handleClickOpen = () => {
        dispatch(updateStateOpenLogin(true));
    };
    const handleClose = () => {
        dispatch(updateStateOpenLogin(false));
    };

    return (
        <React.Fragment>
            <Typography variant="outlined" onClick={handleClickOpen}>
                Đăng nhập
            </Typography>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={isOpenLogin}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Đăng nhập
                </DialogTitle>
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
                <DialogContent dividers className='w-[500px]'>
                    <section className="bg-gray-50 dark:bg-gray-900">
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Sign in to your account
                                </h1>
                                <div className="space-y-4 md:space-y-6" >
                                    <div>
                                        <label htmlFor="user" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input onChange={handleChange} type="text" name="username" id="user" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nhập username..." required="" />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input onChange={handleChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                    <div className='flex justify-between'>
                                        <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={handleClose}>Back</button>
                                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleSubmit}>Sign in</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </DialogContent>
                {/* <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Save changes
                    </Button>
                </DialogActions> */}
            </BootstrapDialog>
        </React.Fragment>
    );
}
