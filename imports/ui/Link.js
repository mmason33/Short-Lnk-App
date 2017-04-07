import React from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class Link extends React.Component {
  onLogOut() {
    Accounts.logout();
  }
  render () {
    return (
      <div>
        <p>The Link Component</p>
        <button name="logout" onClick={this.onLogOut.bind(this)}>Log Out</button>
      </div>
    );
  }
}
