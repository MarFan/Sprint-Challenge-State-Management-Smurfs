import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAILURE,
    SHOW_SMURF_FORM,
    ADD_NEW_SMURF,
    ADDING_NEW_SMURF,
    ADD_NEW_SMURF_FAILURE,
    REMOVE_SMURF,
    REMOVE_SMURF_FAILURE,
    GET_SMURF_SUCCESS,
    UPDATE_SMURF,
    UPDATE_SMURF_FAILURE
} from '../actions'

const initialState = {
    isFetching: false,
    error: '',
    smurfList: null,
    smurfSelected: null,
    showAddForm: false
}

const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfList: action.payload
            }
        case FETCH_SMURF_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case SHOW_SMURF_FORM: 
            return {
                ...state,
                showAddForm: action.payload
            }
        case ADDING_NEW_SMURF:
            return {
                ...state,
                isFetching: true
            }
        case ADD_NEW_SMURF:
            return {
                ...state,
                isFetching: false,
                smurfList: action.payload
            }
        case ADD_NEW_SMURF_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case REMOVE_SMURF:
            return {
                ...state,
                isFetching: false,
                error: '',
                smurfList: action.payload,
                smurfSelected: ''
            }
        case REMOVE_SMURF_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case GET_SMURF_SUCCESS:
            return{
                ...state,
                isFetching: false,
                smurfSelected: state.smurfList.find(({id}) => id === action.payload)
            }
        case UPDATE_SMURF:
            return {
                ...state,
                isFetching: false,
                smurfList: action.payload
            }
        case UPDATE_SMURF_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default: return state
    }
}

export default smurfReducer;