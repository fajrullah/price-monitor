import React, { Component } from 'react';
import {  Input , Form , Button } from "semantic-ui-react";
import { postingDataAPI } from '../utils/AxiosMethod';

class Savedata extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	value : '',
	  	loading : false
	  };
      	this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}
	  handleChange(event) {
	    this.setState({value: event.target.value});
	  }
	  handleSubmit(event) {
	  	this.setState({loading : true})
	    const link = this.state.value
		postingDataAPI('links',{
	    	link
	    }).then(result => {
	    	alert('data was submitted: ' + result);
	    	this.setState({loading : false})
	    	return result
	    }).catch(err => console.log(err))
	    event.preventDefault();
	  }
	render(){
		const { loading } = this.state
		if(loading){
			return <div>Loading ...</div>
		}
		return (
		    <Form onSubmit={this.handleSubmit}>
		      <Input  type="text" value={this.state.value} onChange={this.handleChange}/>
		      <Button>Add Link</Button>
		    </Form>
			)
	}
}
export default Savedata