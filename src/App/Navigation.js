import WidgetsIcon from '@mui/icons-material/Widgets';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import GroupIcon from '@mui/icons-material/Group';
import FolderIcon from '@mui/icons-material/Folder';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SyncIcon from '@mui/icons-material/Sync';
import config from './config';

const navigation = [
    {
        icon: <WidgetsIcon />,
        title: 'Lãnh đạo',
        children: [
            {
                title: 'Chờ duyệt',
                path: config.routesConfig.pending,
                icon: <AssignmentIcon />,
            },
            {
                title: 'Chấp thuận',
                path: '/',
                icon: <LibraryAddCheckIcon />,
            },
        ],
    },
    {
        icon: <WidgetsIcon />,
        title: 'Quản lý nhân viên',
        children: [
            {
                title: 'Tạo mới',
                path: '/aa',
                icon: <GroupIcon />,
            },
            {
                title: 'Quản lý',
                path: '/',
                icon: <FolderIcon />,
            },
            {
                title: 'Kết thúc',
                path: '/',
                icon: <NotificationsIcon />,
            },
            {
                title: 'Nội dung liên quan',
                path: '/',
                icon: <SyncIcon />,
            },
        ],
    },
];
export default navigation;
