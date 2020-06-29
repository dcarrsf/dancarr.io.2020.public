import { makeStyles } from '@material-ui/core/styles';
import PageView from '../../components/PageView';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
    centerAlign: {
        display: 'flex',
        alignItems: 'center'
    },
    titleContainer: {
        width: '300px',
        padding: '50px',
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        fontSize: '6.5rem',
        fontWeight: '100',
        padding: 0
    },
    codeContainer: {
        maxWidth: '500px',
        padding: '50px',
        flex: '1 1 auto',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '6px',
        backgroundColor: 'rgba(0,0,0,0.3)'
        // background: `repeating-linear-gradient(
        //     45deg,
        //     rgba(0,0,0,0),
        //     rgba(0,0,0,0) 2px,
        //     rgba(0,0,0,0.3) 4px,
        //     rgba(0,0,0,0.3) 6px
        // )`
    },
    projectGroup: {
        padding: '20px 0'
    },
    groupTitle: {
        color: 'orange'
    },
    year: {
        marginBottom: '10px'
    },
    divider: {
        backgroundColor: 'lightgray'
    }
});
export default function CodeComponent() {
    const classes = useStyles();
    return (
        <PageView>
            <div className={classes.centerAlign}>
                <div className={classes.titleContainer}>
                    <Typography className={classes.title}>CODE</Typography>
                </div>
                <div className={classes.codeContainer}>
                    <div className={classes.year}>
                        <Typography variant="body">2020</Typography>
                    </div>
                    <Divider className={classes.divider} />
                    <div className={classes.projectGroup}>
                        <Typography variant="body" className={classes.groupTitle}>
                            app-ui-template
                        </Typography>
                        <Typography variant="body2">
                            Update user interface template using React hooks, Webpack 4, and the latest upgrades to
                            dependencies.
                        </Typography>
                    </div>
                    <div className={classes.projectGroup}>
                        <Typography variant="body" className={classes.groupTitle}>
                            app-service-template
                        </Typography>
                        <Typography variant="body2">
                            Backend API server template built with Node, Koa, and Babel.
                        </Typography>
                    </div>
                    <div className={classes.projectGroup}>
                        <Typography variant="body" className={classes.groupTitle}>
                            app-compose-template
                        </Typography>
                        <Typography variant="body2">
                            Simple Docker Compose template used to run mulitple servers as a monolith. Uses NGINX as a
                            reverse proxy for local development.
                        </Typography>
                    </div>
                    <div className={classes.projectGroup}>
                        <Typography variant="body" className={classes.groupTitle}>
                            app-electron-template
                        </Typography>
                        <Typography variant="body2">
                            Simple browser replacement uses Electron to create a local application wrapper.
                        </Typography>
                    </div>
                    <div className={classes.year}>
                        <Typography variant="body">2015-present</Typography>
                    </div>
                    <Divider className={classes.divider} />
                    <div className={classes.projectGroup}>
                        <Typography variant="body" className={classes.groupTitle}>
                            github.com/dcarrsf
                        </Typography>
                        <Typography variant="body2">
                            Check out the dcarrsf repos on GitHub for a mixture of current projects, studies from
                            explorations in JavaScript, and archived open-source ActionScript projects.
                        </Typography>
                    </div>
                </div>
            </div>
        </PageView>
    );
}
