import { makeStyles } from '@material-ui/core/styles';
import PageView from '../../components/PageView';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.35)'
    },
    textGroup: {
        padding: '100px 150px'
    },
    title: {
        fontSize: '6rem',
        fontWeight: '100',
        lineHeight: '5rem'
    },
    subtitle: {
        color: 'lightgray',
        fontSize: '1.5rem',
        fontWeight: '300',
        marginLeft: '10px'
    },
    section: {
        height: '150px',
        backgroundColor: 'rgba(0,0,0,0.2)'
    }
});
export default function HomeComponent() {
    const classes = useStyles();
    return (
        <PageView>
            <div className={classes.root}>
                <div className={classes.textGroup}>
                    <Typography variant="h1" className={classes.title}>
                        STAFF
                    </Typography>
                    <Typography variant="h1" className={classes.title}>
                        WEB APPLICATION
                    </Typography>
                    <Typography variant="h1" className={classes.title}>
                        ENGINEER
                    </Typography>
                    <Typography variant="h6" className={classes.subtitle}>
                        FULL-STACK JAVASCRIPT
                    </Typography>
                </div>
            </div>
            <div className={classes.section} />
        </PageView>
    );
}
