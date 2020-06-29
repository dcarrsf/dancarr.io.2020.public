import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        height: 'calc(100vh - 125px)',
        overflowX: 'scroll',
        '@media (min-width: 768px)': {
            height: 'calc(100vh - 75px)'
        }
    }
}));
export default function ScrollViewComponent(props) {
    const classes = useStyles();
    const { children } = props;
    return <div className={classes.root}>{children}</div>;
}

ScrollViewComponent.propTypes = {
    children: PropTypes.any
};
