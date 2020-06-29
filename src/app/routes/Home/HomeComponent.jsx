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
        padding: '150px 25px',
        '@media (min-width: 768px)': {
            padding: '100px 150px'
        }
    },
    title: {
        fontWeight: '100',
        fontSize: '3rem',
        lineHeight: '2.45rem',
        '@media (min-width: 768px)': {
            fontSize: '6rem',
            lineHeight: '5rem'
        }
    },
    subtitle: {
        color: 'lightgray',
        fontSize: '1.25rem',
        fontWeight: '300',
        marginLeft: '4px',
        '@media (min-width: 768px)': {
            marginLeft: '10px',
            fontSize: '1.5rem'
        }
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
