import { Link, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import Logo from '../Logo';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles({
    root: {
        flex: '1 1 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    link: {
        textDecoration: 'none'
    },
    buttonGroup: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0,
        backgroundColor: '#222',
        display: 'flex',
        justifyContent: 'center',
        '@media (min-width: 768px)': {
            width: 'auto',
            display: 'block',
            position: 'relative',
            justifyContent: 'space-between',
            backgroundColor: 'rgba(0,0,0,0)'
        }
    },
    button: {
        color: 'white',
        fontSize: '1.5rem',
        fontWeight: 100,
        width: '125px',
        '@media (min-width: 768px)': {
            width: 'auto'
        }
    },
    selected: {
        color: 'orange'
    }
});
export default function NavbarComponent(props) {
    const { navigate, routes, selectedIndex, showFirstRoute } = props;
    const classes = useStyles();
    const location = useLocation();

    const { pathname } = location;
    if (pathname !== routes[selectedIndex].path) {
        const currentPathIndex = routes.findIndex(item => item.path === pathname);
        navigate(currentPathIndex);
    }

    const maybeRenderButton = (route, index) => {
        if (index > 0 || showFirstRoute) {
            const { name, path } = route;
            return (
                <Link key={index} to={path} onClick={() => navigate(index)} className={classes.link}>
                    <Button
                        key={index}
                        className={classNames(classes.button, {
                            [classes.selected]: selectedIndex === index
                        })}
                    >
                        {name}
                    </Button>
                </Link>
            );
        }
        return null;
    };

    return (
        <div className={classes.root}>
            <Logo />
            <div className={classes.buttonGroup}>{routes.map((route, i) => maybeRenderButton(route, i))}</div>
        </div>
    );
}

NavbarComponent.propTypes = {
    navigate: PropTypes.func,
    routes: PropTypes.array,
    selectedIndex: PropTypes.number,
    showFirstRoute: PropTypes.bool
};
