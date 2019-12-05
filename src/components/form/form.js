import React from 'react';
import {Button, FormGroup, Input} from "reactstrap";

const TextForm = props => {
    return (
        <FormGroup className="w-25 d-flex">
            <Input onChange={props.changeInp} id="message" placeholder="Text" value={props.inpVal}/>
            <Button>Enter</Button>
        </FormGroup>
    );
};

export default TextForm;