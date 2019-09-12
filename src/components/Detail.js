import React, { Component } from 'react';
import { Icon, Label, Menu, Table , Image } from 'semantic-ui-react'
import {  postingDataAPI }from '../utils/AxiosMethod';
import { toDateTimeLocal } from '../utils/Helper';

class Detail extends Component {
    constructor(props) {
    super(props);
    this.state = {
      data : [],
      loading : true,
    };
  }
  componentWillUnmount(){

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
    const image = data.img_url
    if(loading){
      return (<div> Loading ... </div>)
    }
  return (
        <div>
          <div>{data.name} - {data.price}</div>
          {
            image.map((key,index) => {
              return (<Image key={index} src={key.url} size='small' />)
            })
          }
        </div>
      );
  }
}


export default Detail