import React from 'react';
import ListGroupItem from "reactstrap/es/ListGroupItem";

const ListMessage = props => {
    return (
        <ListGroupItem><span className="pr-1 mr-1 border-dark border rounded bg-light p-1">{props.author}</span>  <span>{props.text}</span></ListGroupItem>
    );
};

export default ListMessage;