import classNames from 'classnames/bind';
import SideBar from '../Component/SideBar';
import styles from './Layout.module.scss';
import { Button } from '@material-ui/core';
const cx = classNames.bind(styles);
function Layout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <SideBar>
                <div className={cx('container')}>
                    <div style={{ margin: '30px' }}>{children}</div>
                    <div className={cx('m_')}></div>
                    <div className={cx('footer')}>
                        <Button>Hotline: 0349655473</Button>
                    </div>
                </div>
            </SideBar>
        </div>
    );
}

export default Layout;
