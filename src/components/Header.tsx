import React from 'react'
import { Grid, Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
const Logo = require('../assets/img/logo.png')

const useStyles = makeStyles({
  logoContainer: {
    width: 300,
    height: 300
  },
  infoCard: { 
    maxWidth: 345
  }
})

const Header = () => {
  const classes = useStyles()

  return (
    <Grid container direction='row' alignItems="center">
      <Grid item>
        <img src={Logo} alt='Logo' className={classes.logoContainer} />
      </Grid>
      <Grid item>
        <Card className={classes.infoCard}>
          <CardHeader title='Adding and viewing treasures' />
          <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          Click on the map to add a treasure with a typed in description plus a hint how to find it. 
          You may also view existing treasures by clicking their respective symbols on the map. 
        </Typography>
            </CardContent> 
        </Card>
      </Grid>
    </Grid>
  )
}
export default Header
