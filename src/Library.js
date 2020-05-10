import React from 'react'
import PouchDB from 'pouchdb'
import Button from '@material-ui/core/Button'

class Library extends React.Component{
    constructor(props){
        super(props)

        this.db = new PouchDB('flashhive');
        this.db.info().then((info)=>{
            console.log(info)
        })
    }
    render() {
        
        return (
            <div>
                LIBRARY<br/>

                <Button variant='contained' color='primary'>START</Button>
            </div>
        )
    }
}

export default Library