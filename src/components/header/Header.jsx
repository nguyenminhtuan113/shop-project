import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link, Outlet } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { NavCategory } from '../navigation/NavCategory';
import Login from '../login/Login';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import ApiServices from '../../services/ApiService';
import { listCategory } from '../../redux-tookit/feater/categorySlice';
import AccountMenu from '../menuAccount/MenuAccount';
const drawerWidth = 400;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: 0,
        }),
        /**
         * This is necessary to enable the selection of content. In the DOM, the stacking order is determined
         * by the order of appearance. Following this rule, elements appearing later in the markup will overlay
         * those that appear earlier. Since the Drawer comes after the Main content, this adjustment ensures
         * proper interaction with the underlying content.
         */
        position: 'relative',
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

export default function Header() {
    // const { listCate } = useSelector((state) => state.categorySlice);
    const dispatch = useDispatch();
    const { isOpenLogin, username } = useSelector((state) => state.authenSlice);
    const fetchDataCategory = async () => {
        const res = await ApiServices.getApiCategory();
        // console.log(res, 'res');
        dispatch(listCategory(res));
    }
    React.useEffect(() => {
        fetchDataCategory();
    }, [])
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <header>
            <Box sx={{ display: 'flex', }} >
                <CssBaseline />
                <AppBar position="fixed" open={open} className='!bg-[#FB5630] '>
                    <div className='w-[1200px] mx-auto'>
                        <div className='flex justify-between  mt-2'>
                            <ul className='flex gap-4 items-center justify-center'>
                                <li className='hover:text-gray-300 text-sm'><Link>Kênh người bán</Link></li>
                                <li className='hover:text-gray-300 text-sm'><Link>Trở thành người bán</Link></li>
                                <li className='hover:text-gray-300 text-sm'><Link>Tải ứng dụng</Link></li>
                            </ul>
                            <ul className='flex gap-4 items-center justify-center'>
                                <li className='hover:text-gray-300 text-sm'><Link> <NotificationsActiveIcon /> Thông báo</Link></li>
                                <li className='hover:text-gray-300 text-sm'><Link><SupportAgentIcon />Hỗ trợ</Link></li>
                                <li className='hover:text-gray-300 text-sm'>
                                    <Link>
                                        {username ? <AccountMenu /> : <Login />}
                                    </Link></li>
                            </ul>
                        </div>
                        <Toolbar className='flex justify-between  items-center !px-0'>

                            <Typography variant="h4" noWrap component="div">
                                <Link to={'/'} className='flex items-center'>
                                    <ShoppingBagIcon fontSize='large' />
                                    Shop
                                </Link>
                            </Typography>


                            <div className="w-2/3 max-w-md mx-auto flex-grow-1">
                                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search product ..." />
                                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                                </div>
                                <NavCategory />
                            </div>

                            <div>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="end"
                                    onClick={handleDrawerOpen}
                                    sx={{ ...(open && { display: 'none' }) }}
                                >
                                    <ShoppingCartIcon fontSize='large' />
                                </IconButton>
                            </div>
                        </Toolbar>
                    </div>

                </AppBar>
                <Main open={open} className='mt-14 !p-0 bg-slate-200'>
                    <DrawerHeader />
                    <Outlet />
                </Main>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                        },
                    }}
                    variant="persistent"
                    anchor="right"
                    open={open}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                            <ShoppingCartIcon />Giỏ hàng
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    content
                </Drawer>
            </Box>
        </header>


    );
}
