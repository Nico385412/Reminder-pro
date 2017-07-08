import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Label } from 'react-bootstrap'
import { addReminder, deleteReminder, deleteAllReminders } from './actions';
import './App.css';
import moment from 'moment';
import 'moment/locale/fr';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: '',
            dueDate: '',
            image: null
        }
    }

    componentDidMount(){
        document.body.style.backgroundImage = 'url( https://unsplash.it/' + window.innerWidth + '/' + window.innerHeight + '/?random&blur';
    }

    addReminder(){
        console.log('this', this);
        this.props.addReminder(this.state.text, this.state.dueDate);
    }

    deleteReminder(id){
        console.log('deleting in application', id);
        this.props.deleteReminder(id);
    }

    deleteAllReminder(){
        console.log('deleting all reminder in application');
        this.props.deleteAllReminders();
    }

    renderReminders(){
        const { reminders } = this.props;
        return (
            <ul className="list-group col-sm-4">
                {
                    reminders.map(reminder => {
                        return (
                            <li key={reminder.id} className="list-group-item">
                                <div className="list-item">
                                    <div>{reminder.text}</div>
                                    <div><em>{moment(new Date(reminder.dueDate)).locale('fr').fromNow()}</em></div>
                                </div>
                                <div
                                    className="list-item delete-button"
                                    onClick={() => this.deleteReminder(reminder.id)}>
                                    &#x2715;
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
  render() {
    return (
      <div className="App" style={this.state.image}>
          <h1>
              <Label bsStyle="info"> Reminder Pro </Label>
          </h1>
          <div className="form-inline reminder-form">
              <div className="form-group">
                  <input type="text"
                         className="form-control"
                         placeholder="I Have to"
                         onChange={event => this.setState({text: event.target.value})}
                  />
                  <input className="form-control"
                         type="datetime-local"
                         onChange={event => {this.setState({dueDate: event.target.value})}}/>
              </div>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => this.addReminder()}
              >
                Add Reminder
              </button>
          </div>
          { this.renderReminders() }
          <button
              className="btn btn-danger"
              onClick={() => this.deleteAllReminder()}
          >CLEAR ALL</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, { addReminder, deleteReminder, deleteAllReminders })(App);
