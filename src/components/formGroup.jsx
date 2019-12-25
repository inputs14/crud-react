import React, { Component } from "react";
export class FormGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  handleInput = value => {
    this.setState({ value });
  };

  render() {
    console.log(this.props);
    const { name, labelText, value } = { ...this.props };
    return (
      <div className="form-group row">
        <label htmlFor={name} className="col-sm-2 col-form-label">
          {labelText}
        </label>
        <div className="col-sm-6">
          <input
            name={name}
            className="form-control"
            id={name}
            placeholder={labelText}
            value={value}
            onChange={e => this.handleInput(e.target.value)}
          />
        </div>
      </div>
    );
  }
}

export class FormGroupTextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  handleInput = value => {
    this.setState({ value });
  };

  render() {
    const { name, labelText, value } = { ...this.props };
    return (
      <div className="form-group row">
        <label htmlFor={name} className="col-sm-2 col-form-label">
          {labelText}
        </label>
        <div className="col-sm-6">
          <textarea
            rows="5"
            cols="50"
            name={name}
            className="form-control"
            id={name}
            placeholder={labelText}
            value={value}
            onChange={e => this.handleInput(e.target.value)}
          />
        </div>
      </div>
    );
  }
}
