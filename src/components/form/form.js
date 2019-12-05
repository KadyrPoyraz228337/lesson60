import React from 'react';
import {Button, FormGroup, Input} from "reactstrap";

const TextForm = props => {
    return (
        <FormGroup className="w-50 d-flex m-5">
            <Input className='mr-3 w-25' onChange={props.changeAuthor} id="author" placeholder="Author" value={props.inpAuthor}/>
            <Input onChange={props.changeMessage} id="message" placeholder="Text" value={props.inpMessage}/>
            <Button onClick={props.onClick} className='ml-3'>Add</Button>
        </FormGroup>
    );
};

export default TextForm;