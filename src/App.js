import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comments from './components/Comments';
import Reply from './components/Reply';
import { Container, Header, List } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
  <Container style={{ margin: 20 }}>
    <Header as="h3">This example is powered by Semantic UI React 😊</Header>
    <List bulleted>
      <List.Item
        as="a"
        content="💌 Official documentation"
        href="https://react.semantic-ui.com/"
        target="_blank"
      />
      <List.Item
        as="a"
        content="💡 StackOverflow"
        href="https://stackoverflow.com/questions/tagged/semantic-ui-react?sort=frequent"
        target="_blank"
      />
    </List>
    <Comments/>
  </Container>
  );
}

export default App;
