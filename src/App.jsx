import React from 'react';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: 
            [
                {
                    "id": 1,
                    "name": "golu",
                    "age": 25
                },
                {
                    "id": 2,
                    "name": "chotu",
                    "age": 24
                },
                {
                    "id": 3,
                    "name": "giddu",
                    "age": 3
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <Header />
                <table>
                    <tbody>
                        {this.state.data.map((person, i) => <TableRow key = {i}
                            data ={ person } />)}
                    </tbody>
                </table>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
            </div>
        )
    }
}

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td><strong>{this.props.data.id}</strong></td>
                <td><strong>{this.props.data.name}</strong></td>
                <td><strong>{this.props.data.age}</strong></td>
            </tr>
        )
    }
}
export default App;