import React, { Component } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import { fetchingDataAPI, postingDataAPI , putDataAPI } from '../utils/AxiosMethod';
import { toDateTimeLocal } from '../utils/Helper';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Detail from "./Detail.js"

class Comments extends Component {
    constructor(props) {
    super(props);
    this.state = {
      data : [],
      loading : true,
    };
  }
  componentDidMount(){
    fetchingDataAPI('links')
    .then(result => result.data)
    .then(data => {
      this.setState({data , loading : false})
    })
    .catch(err => console.log(err))
  }
  render(){
    const { data , loading } = this.state
    if(loading){
      return (<div> Loading ... </div>)
    }
  return (
  <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Link</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.HeaderCell>Image URL/Google</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
      {
        data.map((key,index) => {
          return (<Table.Row key={index}>
          <Table.Cell><Link to={`/pagethree/${key.id_link}`} >{key.link}</Link></Table.Cell>
          <Table.Cell>{key.name}</Table.Cell>
          <Table.Cell>{key.price}</Table.Cell>
          <Table.Cell>{key.img_url}</Table.Cell>
        </Table.Row>)
        })
      }
      </Table.Body>
    </Table>
      );
  }
}


export default Comments