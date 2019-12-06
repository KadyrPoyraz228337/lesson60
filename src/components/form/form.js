import React from 'react';
import {Button, FormGroup, Input} from "reactstrap";

const TextForm = props => {
    return (
        <form action="#">
            <FormGroup className="m-50 d-flex mt-5">
                <Input className='mr-3 w-25' onChange={props.changeAuthor} id="author" placeholder="Author" value={props.inpAuthor}/>
                <Input onChange={props.changeMessage} id="message" placeholder="Text" value={props.inpMessage}/>
                <Button type='submit' onClick={props.onClick} className='ml-3'>Add</Button>
            </FormGroup>
        </form>
    );
};

export default TextForm;