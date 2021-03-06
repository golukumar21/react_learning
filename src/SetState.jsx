import React from 'react';

class SetState extends React.Component {
    constructor() {
        super();

        this.state = {
            data: []
        }
        this.setStateHandler = this.setStateHandler.bind(this);
    };

    setStateHandler() {
        var item = 'Hello state!!'
        var myArray = this.state.data.slice();
            myArray.push(item);
        this.setState({data : myArray});
    }

    render() {
        return(
            <div>
                <button onClick = {this.setStateHandler}>SET STATE</button>
                <h3>State Array: {this.state.data}</h3>
            </div>
        )
    }
}

export default SetState;