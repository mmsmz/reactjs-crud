import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
        // imageUrl: 'https://picsum.photos/200'
        // address : {
        //     street: ''
        // }
    };
    // style = {
    //     fontSize: 40,
    //     fontWeight: "bold"

    // };

    render() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        // return (<React.Fragment><h1>HELLO WORLD</h1><button class="btn btn-primary">Increment</button></React.Fragment>);
        return (
            <div>
                <span className="badge badge-primary m-2">{this.formatCount()}</span>
                <button class="btn btn-primary">Increment</button>
            </div >
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
        // return this.state.count === 0 ? 'Zero' : this.state.count;

    }
}

export default Counter;