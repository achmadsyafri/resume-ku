import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
// import Tooltip from '@material-ui/core/Tooltip';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import TopNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles({
  root: {
    width: 400,
 paddingTop: 0,
    paddingBottom: 0
  },
});

export default function PositionedTooltips() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Grid item xs={10} md={12}>
          <TopNavigationAction href="https://www.instagram.com/achmadsyafri/" label="Instagram" icon={<InstagramIcon className={classes.icon}/>} />
          <TopNavigationAction href="https://www.linkedin.com/in/achmadsyafri96/" label="Linkedin" icon={<LinkedInIcon className={classes.icon}/>} />
          <TopNavigationAction href="https://twitter.com/AchmadSyafri" label="Twitter" icon={<TwitterIcon className={classes.icon}/>} />
          <TopNavigationAction href="https://www.facebook.com/achmadsyafri11" label="Facebook" icon={<FacebookIcon className={classes.icon}/>} />
      
      </Grid>
    </div>
  );
}
