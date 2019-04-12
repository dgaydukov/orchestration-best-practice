'use strict';


import * as React from "react";
import {getAllNotes} from "@root/api/webapi"

class Main extends React.PureComponent{
    componentDidMount(){
        getAllNotes();
    }


    render(){
        console.log(this.props)
        return(
            <div>
                <h1>Notes App</h1>
                <div>
                    All notes
                </div>
                <div>
                    Add new note
                </div>
            </div>
        )
    }
}
export default Main;