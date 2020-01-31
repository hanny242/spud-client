import Calendar from 'react-calendar';
import React, { Component } from 'react';

class Calendar extends Component {
    state = {
      date: new Date(),
    }
   
    onChange = date => this.setState({ date })
   
    render() {
      return (
        <div>
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
          />
        </div>
      );
    }
  }