import React from 'react';
import ListGroup from "reactstrap/es/ListGroup";
import ListMessage from "../listMessage/listMessage";

const ListMessages = props => {
    const messageList = props.messageList;
    const list = messageList.map(elem => (
        <ListMessage
            key={elem.id}
            author={elem.author}
            text={elem.message}
        />
    ) );
    return (
        <ListGroup className="bg-white border rounded w-75 mt-3 mb-5 mb-2 p-3 overflow-auto" style={{maxHeight: '600px'}}>
            {list}
        </ListGroup>
    );
};

export default ListMessages;