'use strict';


import * as React from "react";

interface IProps {
    getAllNotes: Function;
    notes: [],
}

class Main extends React.PureComponent<IProps, any>{
    componentDidMount(){
        this.props.getAllNotes()
    }


    render(){
        console.log(this.props.notes)
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