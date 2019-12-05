import React from 'react';
import {Button, FormGroup, Input} from "reactstrap";

const TextForm = props => {
    return (
        <FormGroup className="w-50 d-flex m-3">
            <Input className='mr-3 w-25' onChange={props.changeAuthor} id="author" placeholder="Author" value={props.inpAuthor}/>
            <Input onChange={props.changeMessage} id="message" placeholder="Text" value={props.inpMessage}/>
            <Button className='ml-3'>Add</Button>
        </FormGroup>
    );
};

export default TextForm;