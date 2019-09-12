import React, { Component } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import { fetchingDataAPI, postingDataAPI , putDataAPI } from '../utils/AxiosMethod';
import { toDateTimeLocal } from '../utils/Helper';
class Comments extends Component {
    constructor(props) {
    super(props);
    this.state = {
      data : []
    };
  }
  componentDidMount(){
    fetchingDataAPI('links')
    .then(result => result.data)
    .then(data => {
      this.setState({data})
    })
    .catch(err => console.log(err))
  }
  render(){
    const { data } = this.state
    console.log(data)
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
        data.map((key) => {
          return (<Table.Row>
          <Table.Cell>{key.link}</Table.Cell>
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