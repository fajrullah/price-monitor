import React, { Component } from 'react';
import { Button, Comment, Form, Header , Icon , Input } from 'semantic-ui-react'
import { fetchingDataAPI, postingDataAPI , putDataAPI } from '../utils/AxiosMethod';
import { toDateTimeLocal } from '../utils/Helper';
class Comments extends Component {
    constructor(props) {
    super(props);
    this.state = {
      comment : '',
      text : [],
      username : 'anon',
    };
    this.handleClickUp = this.handleClickUp.bind(this);
    this.handleClickDown = this.handleClickDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    fetchingDataAPI('comm')
    .then(result => result.data)
    .then(text => {
      this.setState({
          text
      })
    })
    .catch(err => console.log(err))
  }
    handleChange(event) {
      this.setState({ [event.target.name]: event.target.value});
    }
    handleSubmit(event) {
      const { comment , username } = this.state
    postingDataAPI('comment',{
        comment , username
      }).then(result => {
        alert('data was submitted: ' + result);
        return result
      }).catch(err => console.log(err))
      event.preventDefault();
    }
  handleClickUp = (key,value) => {
    const likes = value + 1
    const id_comment = key
    putDataAPI(`comment/likes`,{id_comment , likes }).then(result => alert('Likes + 1')).catch(err => console.log(err))
  }
  handleClickDown = (key,value) => {
    const dislikes = value + 1
    const id_comment = key
    putDataAPI(`comment/dislikes`,{id_comment , dislikes }).then(result => alert('Dislikes + 1')).catch(err => console.log(err))
  }
  render(){
    const { comment, text, username } = this.state

    return (
    <Comment.Group>
      <Header as='h3' dividing>
        Comments
      </Header>
      {
        text.map((key,index) => {
           return (<Comment key={index}>
            <Comment.Avatar src='https://source.unsplash.com/random/800x600' />
            <Comment.Content>
              <Comment.Author as='a'>{key.username}</Comment.Author>
              <Comment.Metadata>
                <div>{toDateTimeLocal(key.createtime)}</div>
              </Comment.Metadata>
              <Comment.Text>{key.comment}</Comment.Text>
              <Comment.Actions>
                <Comment.Action onClick={ () => this.handleClickUp(key.id_comment,key.likes)}>{key.likes} <Icon name='thumbs up outline' /></Comment.Action>
                <Comment.Action onClick={ () => this.handleClickDown(key.id_comment,key.dislikes)}>{key.dislikes} <Icon name='thumbs down' /></Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>) 
        })
      }
      <Form onSubmit={this.handleSubmit}>
        <Input  type="text" value={this.state.username} name="username" onChange={this.handleChange} placeholder="yourname ..." />
        <Form.TextArea value={this.state.comment} name="comment" onChange={this.handleChange} placeholder="yourtext ..." />
        <Button content='Add Reply' labelPosition='left' icon='edit' primary />
      </Form>
    </Comment.Group>
      );
  }
}


export default Comments