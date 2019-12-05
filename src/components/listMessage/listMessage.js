import React from 'react';
import ListGroupItem from "reactstrap/es/ListGroupItem";

const ListMessage = props => {
    return (
        <ListGroupItem>{props.text}</ListGroupItem>
    );
};

export default ListMessage;