import React, { Component } from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { createContainer } from 'meteor/react-meteor-data';

//import Task from './Task.jsx';

// App component - represents the whole app
export default class App extends Component {
  // getTasks() {
  //   return [
  //     { _id: 1, text: 'This is task 1' },
  //     { _id: 2, text: 'This is task 2' },
  //     { _id: 3, text: 'This is task 3' },
  //   ];
  // }

  // renderTasks() {
  //   return this.getTasks().map((task) => (
  //     <Task key={task._id} task={task} />
  //   ));
  // }

  showLifePoints() {
    console.log(AppContainer.user)
      return AppContainer.user;
  }


  render() {
    return (
      <div className="container">
        <header>
          <h1>Welcome to AcroParty! Life wins is { this.props.currentUser ? <span>{ this.props.currentUser.stats.lifetimePoints }</span> : '' }</h1>
        </header>
        <AccountsUIWrapper />

      </div>
    );
  }
}

// Meteor user data for React
// App.propTypes = {
//   currentUser: PropTypes.object,
// };

export default createContainer(() => {
  return {
    currentUser: Meteor.user(),
  };
}, App);
