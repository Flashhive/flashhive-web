import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
    appBarRoot: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function RootContainer(props) {
    const classes = useStyles()
  
    return (
        <div>
            <div className={classes.appBarRoot}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Flashhive
                        </Typography>
                        <Button color="inherit" onClick={()=>props.goToPage('title')}>Library</Button>
                    </Toolbar>
                </AppBar>
            </div>
            <Container>
                {props.children}
            </Container>
        </div>
    );
  }

  export default RootContainer