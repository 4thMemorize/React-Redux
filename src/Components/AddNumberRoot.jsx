import React, { Component } from 'react';
import AddNumberContainer from '../Containers/AddNumberContainer';

export default class AddNumberRoot extends Component {
    render() {
      return (
        <div>
          <h1>Add Number Root</h1>
          <AddNumberContainer></AddNumberContainer>
        </div>
      )
    }
  }