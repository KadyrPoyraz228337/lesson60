import React, {Component} from 'react';
import TextForm from "./components/form/form";
import ListMessages from "./components/listMessages/listMessages";
import axios from 'axios';

class App extends Component {
  state = {
    inpAuthor: 'Odmen',
    inpMessage: 'Some text',
    listMessages: []
  };

  addNewMessage = async () => {
    const data = new URLSearchParams();
    data.set('author', this.state.inpAuthor);
    data.set('message',this.state.inpMessage);
    await fetch('http://146.185.154.90:8000/messages', {
      method: 'post',
      body: data,
    })
  };

  createMessages = async () => {
    const messages = await axios.get('http://146.185.154.90:8000/messages');
    const listMessages = messages.data;
    this.setState({listMessages})
  };

  changeAuthor = e => {
    this.setState({inpAuthor: e.target.value})
  };

  changeMessage = e => {
    this.setState({inpMessage: e.target.value})
  };

  componentDidMount() {
    this.createMessages()
  }

  render() {
    return (
        <div>
          <TextForm onClick={this.addNewMessage} changeAuthor={this.changeAuthor} changeMessage={this.changeMessage} inpAuthor={this.state.inpAuthor} inpVal={this.state.inpMessage}/>
          <ListMessages messageList={this.state.listMessages}/>
        </div>
    );
  }
}

export default App;
