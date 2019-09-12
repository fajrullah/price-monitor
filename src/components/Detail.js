import React, { Component } from 'react';
import { Icon, Label, Menu, Table , Image , Button } from 'semantic-ui-react'
import {  postingDataAPI , fetchingDataAPI }from '../utils/AxiosMethod';
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
  handleStart(id_link,link){
    postingDataAPI('scheduler/start',{id_link,link})
    .then(result => {
      alert(result.status)
    })
    .catch(err => console.log(err))
  }
  handleStop(){
    fetchingDataAPI('scheduler/stop')
    .then(result => {
      alert(result.status)
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
          <div><Button onClick={ () => this.handleStart(data.id_link,data.link) }>Active Scheduler every Hour</Button><Button onClick={() => this.handleStop(data.id_link,data.link)} >Stop</Button></div>
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