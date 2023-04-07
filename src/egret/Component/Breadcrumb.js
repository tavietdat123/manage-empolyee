import { Icon } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
import { Fragment } from 'react';
import config from '../../App/config';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
const cx = classNames.bind(styles);
const Breadcrumb = ({ routeSegments }) => {
    return (
        <div className="d-flex align-items-center">
            {routeSegments ? (
                <>
                    <h4 className={cx('font-size-16', 'm-0')}>{routeSegments[routeSegments.length - 1]['name']}</h4>
                    <h4 className={cx('m-0', 'text-muted', 'ms-2 ', 'font-size-20', 'pb-1')}>|</h4>
                </>
            ) : null}
            <Link to={config.routesConfig.root}>
                <HomeIcon color="primary" className="ms-2" />
            </Link>
            {routeSegments
                ? routeSegments.map((route, index) => (
                      <Fragment key={index}>
                          <ArrowForwardIosIcon className={cx('text-muted', 'font-size-16', 'ms-2')} />
                          {/* {index !== routeSegments.length - 1 ? ( */}
                          {route.path ? (
                              <Link to={config.routesConfig.root + route.path}>
                                  <span className={cx('font-size-14', 'text-muted', 'ms-2', 'hover')}>
                                      {route.name}
                                  </span>
                              </Link>
                          ) : (
                              <span className={cx('font-size-14', 'text-muted', 'ms-2')}>{route.name}</span>
                          )}
                      </Fragment>
                  ))
                : null}
        </div>
    );
};

export default Breadcrumb;
