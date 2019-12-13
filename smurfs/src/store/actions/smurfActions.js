import axios from 'axios';

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";
export const SHOW_SMURF_FORM = "SHOW_SMURF_FORM";
export const ADD_NEW_SMURF = "ADD_NEW_SMURF";
export const ADD_NEW_SMURF_FAILURE = "ADD_NEW_SMURF_FAILURE";
export const ADDING_NEW_SMURF = "ADDING_NEW_SMURF";
export const REMOVE_SMURF = "REMOVE_SMURF";
export const REMOVE_SMURF_FAILURE = "REMOVE_SMURF_FAILURE";
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS";
export const UPDATE_SMURF = "UPDATE_SMURF";
export const UPDATE_SMURF_FAILURE = "UPDATE_SMURF_FAILURE";

const apiBaseURL = 'http://localhost:3333/smurfs';

// action!
export const getSmurfList = () => dispatch => {
    dispatch({type: FETCH_SMURF_START});
    axios.get(`${apiBaseURL}`)
        .then(res => dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: FETCH_SMURF_FAILURE, payload: err.response}))
}

export const showSmurfForm = () => dispatch => {
    dispatch({type: SHOW_SMURF_FORM , payload: true});
}

export const hideSmurfForm = () => dispatch => {
    dispatch({type: SHOW_SMURF_FORM , payload: false});
}

export const addNewSmurf = newSmurf => dispatch => {
    dispatch({type: ADDING_NEW_SMURF});
    axios.post(`${apiBaseURL}`, {name: newSmurf.get('name'), age: newSmurf.get('age'), height: newSmurf.get('height')})
        .then(res => dispatch({type: ADD_NEW_SMURF, payload: res.data}))
        .catch(err => dispatch({type: ADD_NEW_SMURF_FAILURE, payload: err.response}))
}

export const removeSmurf = smurfId => dispatch => {
    axios.delete(`${apiBaseURL}/${smurfId}`)
        .then(res => dispatch({type: REMOVE_SMURF, payload: res.data}))
        .catch(err => dispatch({type: REMOVE_SMURF_FAILURE, payload: err.response}))
}

export const getSmurf = smurfId => dispatch => {
    dispatch({type: GET_SMURF_SUCCESS, payload: smurfId})
    // axios.get(`${apiBaseURL}/${smurfId}`)
    //     .then(res => dispatch({type: GET_SMURF_SUCCESS, payload: res.data}))
}

export const updateSmurf = updateSmurf => dispatch => {
    axios.put(`${apiBaseURL}/${updateSmurf.get('id')}`, {id: updateSmurf.get('id'), name: updateSmurf.get('name'), age: updateSmurf.get('age'), height: updateSmurf.get('height')})
        .then(res => dispatch({type: UPDATE_SMURF, payload: res.data}))
        .catch(err => dispatch({type: UPDATE_SMURF_FAILURE, payload: err.response}))
}