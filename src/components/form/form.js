import React from 'react';
import {Button, FormGroup, Input} from "reactstrap";

const TextForm = props => {
    return (
        <FormGroup className="w-25 d-flex">
            <Input onChange={props.changeAuthor} id="author" placeholder="Author" value={props.inpAuthor}/>
            <Input onChange={props.changeMessage} id="message" placeholder="Text" value={props.inpMessage}/>
            <Button>Enter</Button>
        </FormGroup>
    );
};

export default TextForm;