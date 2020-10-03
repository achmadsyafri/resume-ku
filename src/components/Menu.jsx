import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
// import Tooltip from '@material-ui/core/Tooltip';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles({
  root: {
    width: 200,
/*     paddingLeft: 400,
    paddingRight: 0 */
  },
});

export default function PositionedTooltips() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item align="right">
          <InstagramIcon />
            <LinkedInIcon />
            <FacebookIcon />
        </Grid>
      </Grid>
    </div>
  );
}
