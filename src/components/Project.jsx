import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from './Card/Project';

const useStyles = makeStyles((theme) => ({
    containerSpacing: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(6),
    },
    spacing: {
        paddingBottom: theme.spacing(5),
    },
    containerPadding: {
        paddingTop: 30
    }
}));

export default function Project() {
    const classes = useStyles();

    const project = [
        {
            id: 1,
            title: 'My Curriculum Vitae',
            description: <span>is a <b>Intoduction</b> <b>About Me</b>.</span>,
            link: 'https://drive.google.com/file/d/1Gibeg5FUTTCcyvzDgAr7MtvKtWx0aiq5/view?usp=sharing',
            img: "https://res.cloudinary.com/achmadsyafri/image/upload/v1601307549/CV/gambar_cv_iw5fkx.png"
        },
        {
            id: 2,
            title: 'My GitHub',
            description: <span>is my <b>GitHub Account</b> all my <b>Project</b> in here.</span>,
            link: 'https://github.com/achmadsyafri',
            img: "https://res.cloudinary.com/achmadsyafri/image/upload/v1601308446/CV/github_account_hqfc3v.png"
        }
    ]

    return (
        <div>
            <Grid container className={classes.containerSpacing}>
                <Grid item xs>
                    <Typography variant="h3" align="left" color="textPrimary" className={classes.spacing}>
                        <b>My Projects</b>
                    </Typography>
                    <Grid container className={classes.containerPadding} spacing={3}>
                        {
                            project.map(x => (
                                <Grid item xs={12} lg={12} key={x.id}>
                                    <ProjectCard title={x.title} link={x.link} description={x.description} img={x.img} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}