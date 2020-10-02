import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';


function Copyright() {
    return (
        <Typography variant="body2" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                <b>ACHMAD SYAFRI</b>
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    footer: {
        background: 'linear-gradient(45deg, #90caf9 30%, #FF8E53 90%)',
        padding: theme.spacing(3),
        color: '#fff'
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Copyright />
        </footer>
    );
}