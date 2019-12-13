import React, { useState, useEffect, useContext } from 'react';
import { Form, Button, Header } from 'semantic-ui-react';

import { AllSmurfContext } from '../../context/AllSmurfContext';

const SmurfForm = () => {
    const {selectedSmurf, updateSmurf, addSmurf} = useContext(AllSmurfContext);
    const [formState, setFormState] = useState({
        id: '',
        name: "",
        age: "",
        height: "",
        buttonLabel: "Add Smurf"
    })

    useEffect(() => {
        if(selectedSmurf){
            setFormState({
                id: selectedSmurf.id,
                name: selectedSmurf.name,
                age: selectedSmurf.age,
                height: selectedSmurf.height,
                buttonLabel: "Update Smurf"
            })
        }
    }, [selectedSmurf])

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target)
        if(formData.get('id')){
            updateSmurf(formData)
        }else{
            addSmurf(formData)
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
            <Header as="h3">Add a Smurf</Header>
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

export default SmurfForm;
