import React, { Component } from 'react';
import DisplayNumberContatiner from '../Containers/DisplayNumberContatiner';

export default class DisplayNumberRoot extends Component {
    render() {
      return (
        <div>
          <h1>Display Number Root</h1>
          <DisplayNumberContatiner></DisplayNumberContatiner>
        </div>
      )
    }
  }