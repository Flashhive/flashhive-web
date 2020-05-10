import React from 'react'
import PouchDB from 'pouchdb'

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
                LIBRARY
            </div>
        )
    }
}

export default Library