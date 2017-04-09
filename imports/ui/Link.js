import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Links } from '../api/links';
import LinksList from './LinksList';

export default class Link extends React.Component {
  onLogOut() {
    Accounts.logout();
  }
  onSubmit (e) {
    e.preventDefault();
    const url = this.refs.url.value.trim();

    if (url) {
      Links.insert({url});
      this.refs.url.value = '';
    }
  }
  render () {
    return (
      <div>
        <LinksList/>
        <p>The Link Component</p>
        <button name="logout" onClick={this.onLogOut.bind(this)}>Log Out</button>
        <p>Add Link</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="url" placeholder="URL"/>
          <button>Add Link</button>
        </form>
      </div>
    );
  }
}
