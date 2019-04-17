'use strict';


import * as React from "react";
import {createNote, deleteNote, updateNote} from '../../api/webapi';

interface IProps {
    getAllNotes: Function;
    notes: [],
}

class Main extends React.PureComponent<IProps, any, any>{
    state: any;
    
    constructor(props){
        super(props);

        this.state = {
            id: null,
            title: "",
            desc: "",
        }
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.changeState = this.changeState.bind(this);
    }
    componentDidMount(){
        this.props.getAllNotes();
    }

    changeState(e){
        this.state[e.target.name] = e.target.value;
    }

    render(){
        return(
            <div>
                <h1>Notes App</h1>
                <div>
                    All notes
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Desc</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.notes.map((item: any, i: number)=>{
                            return (
                                <tr key={i}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.desc}</td>
                                    <td>
                                        <span style={{color: "red", cursor: "pointer"}} title="delete" onClick={this.delete.bind(this, item.id)}>x</span>
                                        <span style={{marginLeft: "10px", cursor: "pointer"}} title="update" onClick={this.update.bind(this, item.id)}>++</span>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
                <div>
                    <h3>{this.state.id ? `Edit note with id: ${this.state.id}` : "Add new note"}</h3>
                    <div><label>Title: <input type="text" name="title" onChange={this.changeState} defaultValue={this.state.title}/></label></div>
                    <div><label>Desc: <input type="text" name="desc" onChange={this.changeState} defaultValue={this.state.desc}/></label></div>
                    <div><label><button onClick={this.create}>save</button></label></div>
                </div>
            </div>
        )
    }

    async update(id: string){
        const state = this.props.notes.find((k: any)=>k.id===id);
        this.setState(state);
    }

    async create(){
        let request;
        if(this.state.id){
            request = await updateNote(this.state.id, this.state);
        }
        else{
            request = await createNote({title: this.state.title, desc: this.state.desc});
        }
        if(request.status === 200){
            alert(`Saved item with id: ${request.data.id}`);
            this.props.getAllNotes();
            this.setState({
                id: null,
                title: "",
                desc: "",
            });
        }
    }

    async delete(id: string){
        const del = confirm('Are you sure you want to delete?');
        if(del){
            const request = await deleteNote(id);
            if(request.status === 200){
                alert(`Deleted item with id: ${id}`);
                this.props.getAllNotes();
            }
        }
    }
}
export default Main;