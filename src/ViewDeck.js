import React from 'react'
import PouchDB from 'pouchdb'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = (theme)=>({
    root: {
        minWidth: 275,
        maxWidth: 800,
        minHeight: 250,
        textAlign: "center",
        // backgroundColor: "#FF0000"
    },
    display: {
        display: "flex",
        minHeight: 200,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#00FF00"
    },
    actions: {
        display: "flex",
        justifyContent: "space-around",
    },
  })

class FlashCard extends React.Component{
    render(){
        const classes = this.props.classes

        return (
            <Card className={classes.root}>
                <CardContent className={classes.display}>
                    <Typography variant="h3" component="h2">
                        Words here
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions}>
                    <Button size="small">Down</Button>
                    <Button size="small">So-so</Button>
                    <Button size="small">Up</Button>
                </CardActions>
            </Card>
        )
    }
}

class ViewDeck extends React.Component{
    render(){
        const classes = this.props.classes

        return (
            <div className={classes.root}>
                <FlashCard classes={this.props.classes}/>
                    
            </div>
        )
    }
}

export default withStyles(styles)(ViewDeck)