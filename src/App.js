import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comments from './components/Comments';
import Savedata from './components/Savedata';
import Reply from './components/Reply';
import { Container, Header, List, Input , Form , Button } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
  <Container style={{ margin: 20 }}>
    <Header as="h3">Add Link Products</Header>
      <Savedata/>
    <Comments/>
  </Container>
  );
}

export default App;
