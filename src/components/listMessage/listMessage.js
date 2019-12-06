import React from 'react';
import ListGroupItem from "reactstrap/es/ListGroupItem";

const ListMessage = (
    {author, text, date}
) => {
    const dateFormat = require('dateformat');
    const messageDate = dateFormat(date, 'd.m.yy h:s');
    return (
        <ListGroupItem><span className="pr-1 mr-1 border-dark border rounded bg-light p-1">{author}</span>  <span>{text}</span><span>{messageDate}</span></ListGroupItem>
    );
};

export default ListMessage;