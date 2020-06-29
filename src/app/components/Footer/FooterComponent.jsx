import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '75px'
    },
    copyright: {
        color: 'rgba(255,255,255,0.75)'
    }
}));
export default function FooterComponent() {
    const classes = useStyles();
    return (
        <footer className={classes.root}>
            <Typography
                className={classes.copyright}
                variant="caption"
            >{`Copyright © ${new Date().getFullYear()} Daniel Carr. All rights reserved.`}</Typography>
        </footer>
    );
}
