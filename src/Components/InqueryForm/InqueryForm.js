import React, { Component } from 'react';
import './InqueryForm.css';

class InqueryForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
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
      <div className="inquery-form-component">
        <form onSubmit={this.handleSubmit} className="inquery-form">
          <div className="inquery-form-sections name-section">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              value={this.state.value}
              id="name"
              name="name"
              onChange={this.handleChange}
              className="inquery-form-inputs"
            />
          </div>
          <div className="inquery-form-sections firm-section">
            <label htmlFor="firm">Firm:</label>
            <input
              type="text"
              value={this.state.value}
              id="firm"
              name="firm"
              onChange={this.handleChange}
              className="inquery-form-inputs"
            />
          </div>
          <div className="inquery-form-sections phone-section">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              value={this.state.value}
              id="phone"
              name="phone"
              onChange={this.handleChange}
              className="inquery-form-inputs"
            />
          </div>
          <div className="inquery-form-sections email-section">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              value={this.state.value}
              id="email"
              name="email"
              onChange={this.handleChange}
              className="inquery-form-inputs"
            />
          </div>
          <div className="inquery-form-sections concern-area-section">
            <label htmlFor="concernArea">Area of Concern:</label>
            <textarea
              type="text"
              value={this.state.value}
              id="concernArea"
              name="concernArea"
              onChange={this.handleChange}
            />
          </div>
          <input
            type="submit"
            value="Submit"
            className="inquery-submit-button"
          />
        </form>
      </div>
    );
  }
}

export default InqueryForm;