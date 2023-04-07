import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Collapse, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import Tippy from '@tippyjs/react/headless';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import navigation from '../../../Navigation';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
const btnUser = [
    {
        title: 'Trang chủ',
        path: '/',
        icon: <HomeIcon />,
    },
    {
        title: 'Thông tin tài khoản',
        path: '/',
        icon: <PersonIcon />,
    },
    {
        title: 'Đăng xuất',
        icon: <PowerSettingsNewIcon />,
    },
];
const user = {
    img: 'http://training-api.oceantech.com.vn/cms//public/file/downloadbyid/a0fe135c-4437-483f-94ff-26dbdd0f1503',
    name: 'Adminnn',
    account: 'admin',
};

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(0) + 0,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const Sidebar = ({ children }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const [list, setList] = useState([]);
    const [data, setData] = useState({});

    const handleDrawerToggle = () => {
        setOpen(!open);
    };
    const handleList = (id, child) => {
        if (list.includes(id)) {
            setList(list.filter((el) => el !== id));
        } else {
            setList((prev) => [...prev, id]);
        }
        if (data[id]) {
            delete data[id];
        } else {
            setData((prev) => ({
                ...prev,
                [id]: child,
            }));
        }
    };

    return (
        <div className={classes.root}>
            <Drawer
                variant="permanent"
                className={`${classes.drawer} ${open ? classes.drawerOpen : classes.drawerClose}`}
                classes={{
                    paper: `${open ? classes.drawerOpen : classes.drawerClose} drawer-paper`,
                }}
                PaperProps={{ elevation: 0 }}
            >
                <div
                    className=" w-100 h-100 d-flex flex-column "
                    style={{ backgroundColor: '#2b324c', color: 'rgba(255, 255, 255, 0.7)' }}
                >
                    <div className={cx('title')}>
                        <a href="/">Fashion Store</a>
                    </div>
                    <div className={cx('sidebar')}>
                        <div className={cx('user')}>
                            <div className={cx('img')}>
                                <img src={user.img} al="" />
                            </div>
                            <div className={cx('name')}>
                                {user.name}
                                <br />
                                {user.account}
                            </div>
                            <div className={cx('btn_user')}>
                                <Button title="Thông tin tài khoản">
                                    <PersonIcon />
                                </Button>
                                <Button title="Đăng xuất">
                                    <ExitToAppIcon />
                                </Button>
                            </div>
                            <List className="w-100">
                                {navigation.map((el, index) => {
                                    return (
                                        <div key={index}>
                                            <ListItem
                                                button
                                                onClick={() => handleList(index, el.children)}
                                                className={cx('list')}
                                            >
                                                {el.icon}
                                                <ListItemText primary={el.title} />
                                                {list.includes(index) ? <ExpandLess /> : <ExpandMore />}
                                            </ListItem>
                                            <Collapse in={list.includes(index)} timeout="auto" unmountOnExit>
                                                <List component="div" disablePadding>
                                                    {el.children.map((el, index) => {
                                                        return (
                                                            <Link to={el.path} key={index}>
                                                                <ListItem button key={index} className={cx('item')}>
                                                                    {el.icon}
                                                                    <ListItemText primary={el.title} />
                                                                </ListItem>
                                                            </Link>
                                                        );
                                                    })}
                                                </List>
                                            </Collapse>
                                        </div>
                                    );
                                })}
                            </List>
                        </div>
                    </div>
                </div>
            </Drawer>
            <main className="w-100 h-100 d-flex flex-column" style={{ minHeight: '100vh' }}>
                <div className={cx('header')}>
                    <Button className={cx('menu_icon')} onClick={handleDrawerToggle}>
                        <MenuIcon />
                    </Button>
                    <div>
                        <Tippy
                            interactive
                            offset={[]}
                            placement="bottom-end"
                            render={(attrs) => (
                                <div className="box" tabIndex="-1" {...attrs}>
                                    <ul className={cx('container')}>
                                        {btnUser.map((el, index) => {
                                            return (
                                                <li key={index}>
                                                    {el.path ? (
                                                        <a href={el.path}>
                                                            {el.icon} <span>{el.title}</span>
                                                        </a>
                                                    ) : (
                                                        <>
                                                            {el.icon} <span>{el.title}</span>
                                                        </>
                                                    )}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            )}
                        >
                            <div className={cx('img_user')}>
                                <img
                                    alt=""
                                    src="http://training-api.oceantech.com.vn/cms//public/file/downloadbyid/a0fe135c-4437-483f-94ff-26dbdd0f1503"
                                />
                            </div>
                        </Tippy>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-between flex-grow-1">{children}</div>
            </main>
        </div>
    );
};

export default Sidebar;
