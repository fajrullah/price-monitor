import React, { Component } from 'react';
import {  Input , Form , Button } from "semantic-ui-react";

class Savedata extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	value : ''
	  };
      	this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}
	  handleChange(event) {
	    this.setState({value: event.target.value});
	  }
	  handleSubmit(event) {
	    alert('A name was submitted: ' + this.state.value);
	    event.preventDefault();
	  }
	render(){
		return (
		    <Form onSubmit={this.handleSubmit}>
		      <Input  type="text" value={this.state.value} onChange={this.handleChange}/>
		      <Button>Add Link</Button>
		    </Form>
			)
	}
}
export default Savedata