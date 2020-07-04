import { makeStyles } from '@material-ui/core/styles';
import LinkedInImage from '../../../images/Logo-White-28px-R.png';
import classNames from 'classnames';
import PageView from '../../components/PageView';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '20px'
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
    email: {
        marginTop: '-2px',
        marginRight: '10px',
        color: 'orange',
        fontSize: '0.8rem'
    },
    status: {
        margin: '6px 0',
        color: 'lightgray',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: '5px'
    },
    body: {
        padding: '0 35px',
        marginTop: '40px',
        maxWidth: '750px'
    },
    body2: {
        padding: '0 35px',
        marginTop: '25px',
        maxWidth: '750px'
    },
    sectionTitle: {
        color: 'orange',
        fontSize: '1.8rem',
        fontWeight: '100',
        lineHeight: '1.75rem'
    },
    sectionSubtitle: {
        marginTop: '20px',
        color: 'orange',
        fontSize: '1rem'
    },
    sectionBody: {
        fontSize: '0.85rem',
        marginBottom: '6px',
        '@media (min-width: 768px)': {
            fontSize: '1rem'
        }
    },
    section1: {
        backgroundColor: 'rgba(0,0,0,0.35)'
    },
    section2: {
        backgroundColor: 'rgba(0,0,0,0.25)'
    },
    section3: {
        backgroundColor: 'rgba(0,0,0,0.15)'
    }
});
export default function StoryComponent() {
    const classes = useStyles();
    return (
        <PageView>
            <div className={classNames(classes.root, classes.section1)}>
                <div className={classes.header}>
                    <div className={classes.textGroup}>
                        <Typography variant="h2" className={classes.title}>
                            STORY
                        </Typography>
                    </div>
                </div>
                <div className={classes.body}>
                    <Typography variant="h6" className={classes.sectionTitle}>
                        The Walt Disney Studios
                    </Typography>
                    <div className={classes.status}>
                        <Typography variant="body2">Staf Web Application Engineer</Typography>
                        <Typography variant="body2">July 2017 - present</Typography>
                    </div>
                    <Typography variant="body1" className={classes.sectionBody}>
                        Staff engineer at Studio Technology developing full-stack software for internal Studio
                        applications. Joined the Asset Management team in 2017, converting to full time project hire
                        while continuing microservice platform work, along with feature development work on the Studio's
                        Wonderland application.
                    </Typography>
                </div>
            </div>
            <div className={classNames(classes.root, classes.section2)}>
                <div className={classes.body2}>
                    <Typography variant="h6" className={classes.sectionTitle}>
                        Codesmith
                    </Typography>
                    <div className={classes.status}>
                        <Typography variant="body2">Lead Instructor | Senior Software Engineer</Typography>
                        <Typography variant="body2">April 2016 - April 2017</Typography>
                    </div>
                    <Typography variant="body1" className={classes.sectionBody}>
                        Joined the Codesmith team as a late founding member in the engineering academy’s first year.
                        Expanded growth of the academy training 100+ engineers now actively working in the industry.
                        Developed curriculum and led 300+ computer science and software engineering lectures across 8
                        cohorts. Managed software engineering initiatives, while mentoring Engineering Fellows.
                    </Typography>
                </div>
            </div>
            <div className={classNames(classes.root, classes.section3)}>
                <div className={classes.body2}>
                    <Typography variant="h6" className={classes.sectionTitle}>
                        Freelance
                    </Typography>
                    <div className={classes.status}>
                        <Typography variant="body2">Senior Software Engineer | Author | Trainer</Typography>
                    </div>
                    <Typography variant="body1" className={classes.sectionBody}>
                        Sole proprietor providing software development and training services to corporate clients,
                        including long-running relationships with Adobe, Kayak, Autodesk, and Johnson & Johnson, PRD.
                    </Typography>
                    <Typography variant="h6" className={classes.sectionSubtitle}>
                        Publications & Workshops
                    </Typography>
                    <Typography variant="body1" className={classes.sectionBody}>
                        Authored 100+ web development training cources and articles for Pluralsight, Adobe Create
                        Magazine, Adobe Developer Center, and SitePoint. Led 50+ workshops at Adobe MAX, eLearning
                        Guild, and the eLearning Developers Conference.
                    </Typography>
                </div>
                <div className={classes.body} style={{ display: 'flex', alignItems: 'center' }}>
                    <a href="https://www.linkedin.com/in/dcarrsf" style={{ marginRight: '10px' }}>
                        <img src={LinkedInImage} width="80px" alt="linkedin.com/in/dcarrsf" />
                    </a>
                    <a className={classes.email} href="mailto:dan@dancarr.io">
                        dan@dancarr.io
                    </a>
                </div>
            </div>
        </PageView>
    );
}
