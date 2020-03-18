import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
const Logo = require('../assets/img/logo.png')

const useStyles = makeStyles({
  logoContainer: {
    width: 300,
    height: 300
  }
})

const Header = () => {
  const classes = useStyles()

  return (
      <img src={Logo} alt='Logo' className={classes.logoContainer} />
  )
}
export default Header
