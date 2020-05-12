import React from 'react'
import parser from 'fast-xml-parser'

class Setting extends React.Component{

    constructor(props){
        super(props)

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
                </p>

            </div>
        )
    }
}

export default Setting