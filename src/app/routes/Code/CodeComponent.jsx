import { makeStyles } from '@material-ui/core/styles';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import CollectionsIcon from '@material-ui/icons/Collections';
import GitHubIcon from '@material-ui/icons/GitHub';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import PageView from '../../components/PageView';
import projects from './projects.json';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const iconMap = {
    BorderColor: BorderColorIcon,
    CloudQueue: CloudQueueIcon,
    Collections: CollectionsIcon,
    DesktopMac: DesktopMacIcon,
    GitHub: GitHubIcon
};

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '20px',
        backgroundColor: 'rgba(0,0,0,0.35)'
    },
    header: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    textGroup: {
        position: 'relative'
    },
    title: {
        margin: '2px 0',
        fontSize: '2.5rem',
        fontWeight: '100',
        '@media (min-width: 768px)': {
            fontSize: '4rem'
        }
    },
    year: {
        position: 'absolute',
        right: '-45px',
        bottom: '-26px',
        fontSize: '2.5rem',
        fontWeight: '100',
        '@media (min-width: 768px)': {
            right: '-45px',
            bottom: '-43px',
            fontSize: '4rem'
        }
    },
    body: {
        padding: '0 35px',
        marginTop: '40px',
        maxWidth: '750px'
    },
    sectionTitle: {
        color: 'orange',
        fontSize: '1.8rem',
        fontWeight: '100'
    },
    sectionSubtitle: {
        color: 'orange',
        fontSize: '1.5rem',
        fontWeight: '100'
    },
    sectionBody: {
        fontSize: '0.85rem',
        marginBottom: '6px',
        '@media (min-width: 768px)': {
            fontSize: '1rem'
        }
    },
    project: {
        width: '100%',
        padding: '10px 0px',
        display: 'flex',
        textDecoration: 'none',
        borderRadius: '6px',
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.25)'
        }
    },
    projectIcon: {
        padding: '10px 20px',
        color: 'white'
    },
    projectTitle: {
        color: 'orange'
    },
    projectBody: {
        fontSize: '0.85rem',
        color: 'white',
        '@media (min-width: 768px)': {
            fontSize: '1rem'
        }
    },
    projectKeywords: {
        color: 'lightgray'
    },
    highlight: {
        color: 'orange'
    },
    github: {
        padding: '0 35px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '20px',
        backgroundColor: 'rgba(0,0,0,0.25)'
    },
    githubBody: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: '20px 0',
        maxWidth: '750px',
        width: '100%'
    }
});
export default function CodeComponent() {
    const classes = useStyles();

    function renderProject(project, index) {
        const { name, description, keywords, github, icon } = project;
        const Icon = iconMap[icon];
        return (
            <a key={index} className={classes.project} href={github}>
                <Icon className={classes.projectIcon} />
                <div>
                    <Typography variant="h6" className={classes.projectTitle}>
                        {name}
                    </Typography>
                    <Typography variant="body1" className={classes.projectBody}>
                        {description}
                    </Typography>
                    <Typography variant="caption" className={classes.projectKeywords}>
                        {`[${keywords.join(', ')}]`}
                    </Typography>
                </div>
            </a>
        );
    }

    return (
        <PageView>
            <div className={classes.root}>
                <div className={classes.header}>
                    <div className={classes.textGroup}>
                        <Typography variant="h2" className={classes.title}>
                            PROJECTS
                        </Typography>
                        <Typography variant="h2" className={classes.year}>
                            2020
                        </Typography>
                    </div>
                </div>
                <div className={classes.body}>
                    <Typography variant="h6" className={classes.sectionTitle}>
                        Starter Templates:
                    </Typography>
                    <Typography variant="body1" className={classes.sectionBody}>
                        These templates can be used to start everything from web or desktop UI’s, to full fledged
                        microservices composed of multiple containers, and any combination between.
                    </Typography>
                    {projects && projects.map((project, i) => renderProject(project, i))}
                </div>
            </div>
            <div className={classes.github}>
                <div className={classes.githubBody}>
                    <Typography variant="h6" className={classes.sectionTitle}>
                        GitHub:
                    </Typography>
                    <Typography variant="body1" className={classes.sectionBody}>
                        Check out more templates, projects, and archived code spanning 2015 - present, at the
                        <span className={classes.highlight}> dancarrsf </span>GitHub page.
                    </Typography>
                    {renderProject(
                        {
                            name: 'github.com/dcarrsf',
                            description:
                                'Public and private repositories mostly consisting of templates and prototype work.',
                            keywords: ['Docker', 'JavaScript', 'Electron', 'Webpack', 'Node'],
                            github: 'https://github.com/dcarrsf',
                            icon: 'GitHub'
                        },
                        10
                    )}
                </div>
            </div>
        </PageView>
    );
}
