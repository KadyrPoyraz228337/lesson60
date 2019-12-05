import React from 'react';
import ListGroup from "reactstrap/es/ListGroup";
import ListMessage from "../listMessage/listMessage";

const ListMessages = props => {
    const messageList = props.messageList;
    const list = messageList.map(elem=><ListMessage key={elem._id} author={elem.author} text={elem.message}/>)
    return (
        <ListGroup className="w-50 m-5">
            {list}
        </ListGroup>
    );
};

export default ListMessages;