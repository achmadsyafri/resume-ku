import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Menu from '../components/Menu';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },

    heroContent: {
        background: '#e3e6e8',
        //backgroundImage: "url(" + "https://d5qmjlya0ygtg.cloudfront.net/402/087/293/-449996995-1srj5la-bt8liti4hptpp00/original/avatar.jpg" + ")",
        //backgroundPosition: 'center',
        padding: theme.spacing(1, 0, 7),
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        minHeight: '650px',
        position: 'relative',
        overflow: 'hidden'
    },

    title: {
        fontWeight: 'bold',
        paddingBottom: theme.spacing(5)
    },
    description: {
        lineHeight: 2.3
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    spacing: {
        marginBottom: theme.spacing(6),        
    },
    pic: {
        width: 550,
        paddingTop: 10,
        paddingBottom: 0
    },
}));



export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.heroContent}>
        <Grid item xs={12} align="right">   
        <Menu />
        </Grid>
        <Container maxWidth="md">

        <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
        <Typography variant="h3" align="left" className={classes.title} gutterBottom>
           I'm Achmad Syafri
         </Typography>
        <Typography variant="h6" align="left" className={classes.description}>
                    Hello i'm a <b>DATA ANALYSIS</b> and <b>WEB DEVELOPER</b> from <b>MAKASSAR</b>, Indonesia.
                    my main capability is professional engineering skill especially in principles of 
                    computer science and analysis in the design, testing, development and evaluation 
                    of operating systems, software, and computer performance. I like sharing information 
                    about work and life. happy to meet new people for get a new <b>EXPERIENCE</b> from them. Im 
                    capable to work under pressure and eager to be challaged in order to improve my <b>SKILLS</b>.
                </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
        <div className={classes.spacing}>
                    <img alt="MyImage" src={require ("../assets/img/me2.png")} className={classes.pic}/>
                </div>
        </Grid>

      </Grid>
        </Container>
        
      
    </div>

  );
}