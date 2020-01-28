import React, { Component } from 'react';
import './InquiryForm.css';

class InquiryForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      firm: '',
      phone: '',
      email: '',
      concernArea: ''
    };
  }

  handleChange = event => {
    const { name, value, type } = event.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({
      [name]: val
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const inquiryData = {
      name: this.state.name,
      firm: this.state.firm,
      phone: this.state.phone,
      email: this.state.email,
      concernArea: this.state.concernArea
    }
    this.sendEmail(inquiryData);
  };

  sendEmail = (inquiryData) => {
    console.log(inquiryData);
    // const service_id = 'default_service';
    // const template_id = 'inquiry_form_template';
    // window.emailjs.send(service_id, template_id, inquiryData)
    //   .then(response => {
    //     console.log(response)
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    this.clearForm();
  };

  clearForm = (response) => {
    this.setState({
      name: '',
      firm: '',
      phone: '',
      email: '',
      concernArea: ''
    });
  };


  render() {
    return (
      <div className="inquiry-form-component">
        <form onSubmit={this.handleSubmit} className="inquiry-form">
          <div className="inquiry-form-sections name-section">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              value={this.state.value}
              id="name"
              name="name"
              onChange={this.handleChange}
              className="inquiry-form-inputs"
            />
          </div>
          <div className="inquiry-form-sections firm-section">
            <label htmlFor="firm">Firm:</label>
            <input
              type="text"
              value={this.state.value}
              id="firm"
              name="firm"
              onChange={this.handleChange}
              className="inquiry-form-inputs"
            />
          </div>
          <div className="inquiry-form-sections phone-section">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              value={this.state.value}
              id="phone"
              name="phone"
              onChange={this.handleChange}
              className="inquiry-form-inputs"
            />
          </div>
          <div className="inquiry-form-sections email-section">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              value={this.state.value}
              id="email"
              name="email"
              onChange={this.handleChange}
              className="inquiry-form-inputs"
            />
          </div>
          <div className="inquiry-form-sections concern-area-section">
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
            className="inquiry-submit-button"
            onClick={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}

export default InquiryForm;