import DisplayNumber from '../Components/DisplayNumber';
import {connect} from 'react-redux';
function mapStateToProps(state) {
    return {
        number : state.number
    }
}
export default connect(mapStateToProps)(DisplayNumber);
/*
import React, {Component} from 'react';
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
}*/