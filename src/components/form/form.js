import React from 'react';
import {Button, FormGroup, Input} from "reactstrap";

const TextForm = props => {
    return (
        <FormGroup className="w-25 d-flex">
            <Input id="message" placeholder="Text"/>
            <Button>Enter</Button>
        </FormGroup>
    );
};

export default TextForm;