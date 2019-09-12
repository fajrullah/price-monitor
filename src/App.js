import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comments from './components/Comments';
import Savedata from './components/Savedata';
import Reply from './components/Reply';
import Table from './components/Table';
import Detail from './components/Detail';
import { Container, Header, List, Input , Form , Button , Menu } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'

function Index() {
  return (<div>
  	<Header as="h3">Add Link Products</Header>
      <Savedata/>
    <Comments/></div>);
}

function pageTwo() {
    return (<div>
  	   <Table/>
   	</div>);
}

function pageThree() {
  return (<div>
  	     
   	</div>);
}
function App() {
  return (
  <Container style={{ margin: 20 }}>
  <Router>
      <div>
	     <Menu>
	        <Menu.Item name='one'>
	        	<Link to="/">Page One</Link>
	        </Menu.Item>
	        <Menu.Item name='two'>
	        	<Link to="/pagetwo/">Page Two</Link>
	        </Menu.Item>
	        <Menu.Item name='three' >
	          <Link to="/pagethree/foo">Page Three</Link>
	        </Menu.Item>
	   	</Menu>
        <Route path="/" exact component={Index} />
        <Route path="/pagetwo/" component={pageTwo} />
        <Route path='/pagethree/:id' component={Detail} />

      </div>
    </Router>
  </Container>
  );
}

export default App;
