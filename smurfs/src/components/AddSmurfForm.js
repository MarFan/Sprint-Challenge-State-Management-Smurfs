import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import { Form, Button, Header } from 'semantic-ui-react';

import { addNewSmurf, updateSmurf } from '../store/actions'

const AddSmurfForm = props => {
    const [formState, setFormState] = useState({
        id: '',
        name: "",
        age: "",
        height: "",
        buttonLabel: "Add Smurf"
    })

    useEffect(() => {
        if(props.smurfSelected){
            setFormState({
                id: props.smurfSelected.id,
                name: props.smurfSelected.name,
                age: props.smurfSelected.age,
                height: props.smurfSelected.height,
                buttonLabel: "Update Smurf"
            })
        }
    }, [props])

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target)
        if(formData.get('id')){
            props.updateSmurf(formData);
        }else{
            
            props.addNewSmurf(formData);
        }
        setFormState({
            id: '',
            name: '',
            age: '',
            height: '',
            buttonLabel: 'Add Smurf'
        })
    }

    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <Header as="h2">Add a Smurf</Header>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Name</label>
                    <input name="name" placeholder="Name" value={formState.name} onChange={handleChange} />
                </Form.Field>
                <Form.Field>
                    <label>Age</label>
                    <input name="age" placeholder="Age" value={formState.age} onChange={handleChange} />
                </Form.Field>
                <Form.Field>
                    <label>Height</label>
                    <input name="height" placeholder="Height" value={formState.height} onChange={handleChange} />
                </Form.Field>
                <input type="hidden" name="id" value={formState.id} />
                <Button type="submit">{formState.buttonLabel}</Button>
            </Form>
        </>
    )
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

export default connect(mapStateToProps, {addNewSmurf, updateSmurf})(AddSmurfForm);