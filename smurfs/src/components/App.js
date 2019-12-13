import React, { useEffect } from "react";
import { connect } from 'react-redux';
import './App.css'
import logo from "../assets/The_Smurfs_Logo.svg"

import { Container, Grid, Header, Image, Icon} from 'semantic-ui-react';

import Loader from 'react-loader-spinner';

import { getSmurfList, showSmurfForm } from '../store/actions'

import SmurfList from '../components/SmurfList'

import AddSmurfForm from './AddSmurfForm'

const App = props => {
  
  useEffect(() => {
    props.getSmurfList()
  }, [])

  return (
    <Container className="App">
      <Header as="h1" dividing>
        <Image src={logo} />
        SMURFS! 2.0 W/ Redux
      </Header>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header as="h3">
              <span onClick={() => props.showAddForm}><Icon name="add circle" color="blue" /></span>
              Smurfs
            </Header>
            {
              props.isFetching && (
                <Loader type="Grid" color="gray" height={40} width={40} />
              )
            }
            {
              props.smurfList &&(
                <SmurfList />
              )
            }
          </Grid.Column>
          <Grid.Column width={6}>
            {
              !props.smurfSelected ? '' :
              
                // <Header as="h4">Details</Header>
                props.smurfSelected.name
               
              
            }
          </Grid.Column>
          <Grid.Column width={6}>
            <AddSmurfForm />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    error: state.error,
    smurfList: state.smurfList,
    smurfSelected: state.smurfSelected,
    showAddForm: state.showAddForm
  }
}

export default connect(mapStateToProps, { getSmurfList, showSmurfForm })(App);
