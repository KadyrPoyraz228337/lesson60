import React from 'react';
import ListGroupItem from "reactstrap/es/ListGroupItem";

const ListMessage = props => {
    return (
        <ListGroupItem><span>{props.author}</span>  <span>{props.text}</span></ListGroupItem>
    );
};

export default ListMessage;