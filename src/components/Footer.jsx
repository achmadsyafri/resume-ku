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
        background: '#e3e6e8',
        padding: theme.spacing(3),
        color: '#000'
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