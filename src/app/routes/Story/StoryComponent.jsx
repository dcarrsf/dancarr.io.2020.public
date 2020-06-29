import { makeStyles } from '@material-ui/core/styles';
import PageView from '../../components/PageView';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles({
    centerAlign: {
        flex: '1 1 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    title: {
        fontSize: '6.5rem',
        fontWeight: '100',
        padding: 0
    }
});
export default function CodeComponent() {
    const classes = useStyles();
    return (
        <PageView>
            <div className={classes.centerAlign}>
                <Typography className={classes.title}>STORY</Typography>
            </div>
        </PageView>
    );
}
