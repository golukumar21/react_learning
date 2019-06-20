import React from 'react';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            header : "Header from props....",
            content : "Content from props...."
        }
        // this.state = {
        //     data: 
        //     [
        //         {
        //             "id": 1,
        //             "name": "golu",
        //             "age": 25
        //         },
        //         {
        //             "id": 2,
        //             "name": "chotu",
        //             "age": 24
        //         },
        //         {
        //             "id": 3,
        //             "name": "giddu",
        //             "age": 3
        //         }
        //     ]
        //     header: "Header from state...",
        //     content: "Content from state..."
        // }
    }
    render() {
        return (
            <div>
                {/* <Header />
                <table>
                    <tbody>
                        {this.state.data.map((person, i) => <TableRow key = {i}
                            data ={ person } />)}
                    </tbody>
                </table> */}
                {/* <h1>{this.props.headerProps}</h1>
                <h2>{this.props.contentProps}</h2> */}
                <Header headerProp={this.state.header}/>
                <Content contentProp={this.state.content} />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.headerProp}</h1>
            </div>
        )
    }
}

class Content extends React.Component {
    render() {
        return(
            <div>
                <h2>{this.props.contentProp}</h2>
            </div>
        )
    }
}
// class TableRow extends React.Component {
//     render() {
//         return (
//             <tr>
//                 <td><strong>{this.props.data.id}</strong></td>
//                 <td><strong>{this.props.data.name}</strong></td>
//                 <td><strong>{this.props.data.age}</strong></td>
//             </tr>
//         )
//     }
// }

// App.defaultProps = {
//     headerProps : "Header from props....",
//     contentProps : "Content from props...."
// }

export default App;