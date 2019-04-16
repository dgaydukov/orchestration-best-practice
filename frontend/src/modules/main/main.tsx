'use strict';


import * as React from "react";
import {createNote} from '../../api/webapi';

interface IProps {
    getAllNotes: Function;
    notes: [],
}

class Main extends React.PureComponent<IProps>{
    constructor(props){
        super(props);

        this.state = {
            title: "",
            desc: "",
        }
        this.addNote = this.addNote.bind(this);
        this.changeState = this.changeState.bind(this);
    }
    componentDidMount(){
        this.props.getAllNotes();
    }

    changeState(e){
        console.log(this.state)
        this.state[e.target.name] = e.target.value;
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
                    <div><label>Title: <input type="text" name="title" onChange={this.changeState}/></label></div>
                    <div><label>Desc: <input type="text" name="desc" onChange={this.changeState}/></label></div>
                    <div><label><button onClick={this.addNote}>add</button></label></div>
                </div>
            </div>
        )
    }

    async addNote(){
        const note = await createNote(this.state)
        if(note.status === 200){
            alert(`Added new item`);
            this.props.getAllNotes();
        }
    }
}
export default Main;