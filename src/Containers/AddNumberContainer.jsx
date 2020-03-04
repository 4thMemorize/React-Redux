import React, {Component} from 'react';
import store from '../store';
import AddNumber from '../Components/AddNumber';
export default class extends Component {
    render() {
        return <AddNumber onClick = {size => {
            store.dispatch({type : 'INCREMENT', size : size});
        }}></AddNumber>
    }
}