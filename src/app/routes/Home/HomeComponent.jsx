import { makeStyles } from '@material-ui/core/styles';
import LinkedInImage from '../../../images/Logo-White-28px-R.png';
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
    contact: {
        display: 'flex',
        padding: '6px 0 0 13px'
    },
    divider: {
        margin: '0 5px 0 2px'
    },
    email: {
        fontSize: '1rem',
        color: 'orange'
    }
});
export default function HomeComponent() {
    const classes = useStyles();
    return (
        <PageView>
            <div className={classes.centerAlign}>
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
                <div className={classes.contact}>
                    <a href="https://www.linkedin.com/in/dcarrsf">
                        <img width="80px" src={LinkedInImage} alt="https://www.linkedin.com/in/dcarrsf" />
                    </a>{' '}
                    <Typography variant="body" className={classes.divider}>
                        |
                    </Typography>
                    <Typography variant="body" className={classes.email}>
                        dan@dancarr.io
                    </Typography>
                </div>
            </div>
        </PageView>
    );
}
