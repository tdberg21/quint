import React, { Component } from 'react';

class InqueryForm extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      firm: '',
      phone: '',
      email: '',
      concernArea: ''
    };
  }

  handleChange = event => {
    const { name, value, type } = event.target;
    console.log(value);
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({
      [name]: val
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">
            First Name:
            <input
              type="text"
              value={this.state.value}
              id="firstName"
              name="firstName"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="lastName">
            Last Name:
            <input
              type="text"
              value={this.state.value}
              id="lastName"
              name="lastName"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="firm">
            Firm:
            <input
              type="text"
              value={this.state.value}
              id="firm"
              name="firm"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="phone">
            Phone:
            <input
              type="text"
              value={this.state.value}
              id="phone"
              name="phone"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              value={this.state.value}
              id="email"
              name="email"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="concernArea">
            Area of Concern:
            <input
              type="text"
              value={this.state.value}
              id="concernArea"
              name="concernArea"
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default InqueryForm;