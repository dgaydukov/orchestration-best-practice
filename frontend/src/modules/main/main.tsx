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
        return(
            <div>
                <h1>Notes App</h1>
                <div>
                    All notes
                    <ul>
                    {this.props.notes.map((item: any, i: number)=>{
                        return (
                            <li key={i}>id: {item.id}, title: {item.title}, desc: {item.desc}</li>
                        )
                    })}
                    </ul>
                </div>
                <div>
                    Add new note
                </div>
            </div>
        )
    }
}
export default Main;