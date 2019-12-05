import React, {Component} from 'react';
import TextForm from "./components/form/form";
import ListMessages from "./components/listMessages/listMessages";

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
    fetch('http://146.185.154.90:8000/messages', {
      method: 'post',
      body: data,
    })
  };

  changeAuthor = e => {
    this.setState({inpAuthor: e.target.value})
  };

  changeMessage = e => {
    this.setState({inpMessage: e.target.value})
  };

  async componentDidMount() {
    let listMessages = [...this.state.listMessages];
    const responce = await fetch('http://146.185.154.90:8000/messages');
    if(responce.ok){
      const messages = await responce.json();
      listMessages = messages.reverse();
      this.setState({listMessages:listMessages});
    }
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
