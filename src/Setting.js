import React from 'react'
import parser from 'fast-xml-parser'
import PouchDB from 'pouchdb'

class Setting extends React.Component{

    constructor(props){
        super(props)

        this.db = new PouchDB('flashhive')

        this.state = {
            dbdata: null
        }
    }

    handleXmlFile = (e)=>{
        const file = e.target.files[0]

        const fileReader = new FileReader()
        fileReader.onloadend = (e)=>{
            const content = e.target.result
            this.setState({dbdata: content})
        }

        fileReader.readAsText(file)
    }

    loadDummyData = ()=>{
        const jsonObj = parser.parse(this.state.dbdata)
        console.log(jsonObj)

        const deckId = jsonObj.flashhive.deckinfo.id
        console.log(deckId)

        jsonObj.flashhive.deckbody.card.forEach((card,idx) => {
            console.log(card)
            console.log(idx)

            const id = deckId+"_"+idx

            const doc = {
                "_id": id,
                "question": card.question,
                "answer": card.answer
            }
            console.log(doc)

            this.db.put(doc)
        });
    }

    resetDatabase = ()=>{
        this.db.destroy().then(()=>{
            console.log("Database dropped")
        }).catch((err)=>{
            console.error(err)
        })
    }

    render(){
        return (
            <div>
                <p>
                    Setting
                </p>

                <p>
                    Load dummy data into database<br/>

                    <input type="file" accept=".xml" 
                        onChange={this.handleXmlFile}
                    />

                    <input type="button" value="Submit"
                        onClick={this.loadDummyData}
                    />
                </p>
                
                <p>
                    <a>Reset database</a><br/>

                    <input type="button" value="Reset"
                        onClick={this.resetDatabase}
                    />
                </p>

            </div>
        )
    }
}

export default Setting