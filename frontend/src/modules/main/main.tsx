'use strict';


import * as React from "react";
import config from '@root/site-config';

class Main extends React.PureComponent{
    render(){
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