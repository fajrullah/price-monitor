import React, { Component } from 'react';
import {  Input , Form , Button } from "semantic-ui-react";
import { postingDataAPI } from '../utils/AxiosMethod';

class Savedata extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	value : '',
	  	loading : true
	  };
      	this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}
	  handleChange(event) {
	    this.setState({value: event.target.value});
	  }
	  handleSubmit(event) {
	    const link = this.state.value
		postingDataAPI('links',{
	    	link
	    }).then(result => {
	    	alert('data was submitted: ' + result);
	    	return result
	    }).catch(err => console.log(err))
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