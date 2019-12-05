import React from 'react';
import ListGroup from "reactstrap/es/ListGroup";
import ListMessage from "../listMessage/listMessage";

const ListMessages = props => {
    const messageList = props.messageList;
    const list = messageList.map(elem=><ListMessage key={elem.id} text={elem.message}/>)
    return (
        <ListGroup>
            {list}
        </ListGroup>
    );
};

export default ListMessages;