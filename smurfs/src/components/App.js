import React, { useState, useEffect } from "react";
import {Route} from 'react-router-dom';
import axios from 'axios';
import { Container, Grid, Header, Image, Icon} from 'semantic-ui-react';
import Loader from 'react-loader-spinner';
import logo from "../assets/The_Smurfs_Logo.svg"

// Contexts
import { AllSmurfContext } from '../context/AllSmurfContext';
import SmurfList from './smurfs/SmurfList';
import SmurfForm from './smurfs/SmurfForm';
// import "./App.css";

const App = () => {

  const [smurfList, setSmurfList] = useState([]);
  const [selectedSmurf, setSelectedSmurf] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const getInitialSmurfs = () => {
    axios.get(`http://localhost:3333/smurfs`)
      .then(res => {
          setSmurfList(res.data)
          setLoading(false)
        }
      )
      .catch(err => setError(err.response))
  }

  const chooseSmurf = smurfId => {
    setSelectedSmurf(smurfList.find(smurf => smurf.id === smurfId))
  }

  const updateSmurf = smurf => {
    axios.put(`http://localhost:3333/smurfs/${smurf.get('id')}`, {id: smurf.get('id'), name: smurf.get('name'), age: smurf.get('age'), height: smurf.get('height')})
      .then(res => setSmurfList(res.data))
      .catch(err => setError(err.response))
  }

  const addSmurf = smurf => {
    axios.post(`http://localhost:3333/smurfs`, {id: smurf.get('id'), name: smurf.get('name'), age: smurf.get('age'), height: smurf.get('height')})
      .then(res => setSmurfList(res.data))
      .catch(err => setError(err.response))
  }

  const removeSmurf = smurf => {
    axios.delete(`http://localhost:3333/smurfs/${smurf}`)
        .then(res => {setSmurfList(res.data); setSelectedSmurf();})
        .catch(err => setError(err.response))
  }

  // get default data
  useEffect(() => {
    getInitialSmurfs();
  }, [])

  return (
    <AllSmurfContext.Provider value={{smurfList, selectedSmurf, chooseSmurf, updateSmurf, addSmurf, removeSmurf}}>
      <Container className="App">
        <Header as="h1" dividing>
          <Image src={logo} />
          SMURFS! 2.0 W/ Context
        </Header>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Header as="h3">Smurfs</Header>
              {
                loading && (
                  <Loader type="Grid" color="gray" height={40} width={40} />
                )
              }
              {
                smurfList && (
                  <SmurfList />
                )
              }
            </Grid.Column>
            {/* Wrap in SelectedSmurf */}
            <Grid.Column width={6}>
              <Header as="h3">Your Smurf</Header>
            </Grid.Column>
            <Grid.Column width={6}>
              <SmurfForm />
            </Grid.Column>
            {/* End SelectedSmurf Wrap */}
          </Grid.Row>
        </Grid>
      </Container>
    </AllSmurfContext.Provider>
  );
}

export default App;
