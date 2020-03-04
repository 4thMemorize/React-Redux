import React, {Component} from 'react';
import DisplayNumber from '../Components/DisplayNumber';
import store from '../store';
export default class extends Component {
    state = {number : store.getState().number};
    constructor(props) {
        super(props);
        store.subscribe(() => {
            this.setState({number : store.getState().number})
        });
    }
    render() {
        return <DisplayNumber number = {this.state.number}></DisplayNumber>
    }
}