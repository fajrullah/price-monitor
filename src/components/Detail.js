import React, { Component } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import { fetchingDataAPI, postingDataAPI , putDataAPI } from '../utils/AxiosMethod';
import { toDateTimeLocal } from '../utils/Helper';

class Detail extends Component {
    constructor(props) {
    super(props);

    this.state = {
      data : [],
      loading : true,
    };
  }
  componentDidMount(){
    const id_link = this.props.match.params.id
    postingDataAPI('/links/sp',{id_link})
    .then(result => result.data.data)
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
        <div>data</div>
      );
  }
}


export default Detail