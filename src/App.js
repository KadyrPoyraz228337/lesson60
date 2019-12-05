import React, {Component} from 'react';
import TextForm from "./components/form/form";

class App extends Component {
  state = {
    inpAuthor: '',
    inpMessage: '',
    listMessages: []
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
      listMessages = messages;
      this.setState({listMessages:listMessages});
    }
  }

  render() {
    return (
        <div>
          <TextForm changeAuthor={this.changeAuthor} changeMessage={this.changeMessage} inpAuthor={this.state.inpAuthor} inpVal={this.state.Message}/>
        </div>
    );
  }
}

export default App;
