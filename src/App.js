import React, {Component} from 'react';
import TextForm from "./components/form/form";

class App extends Component {
  state = {
    inpAuthor: '',
    inpMessage: ''
  };

  changeAuthor = e => {
    this.setState({inpAuthor: e.target.value})
  };

  changeMessage = e => {
    this.setState({inpMessage: e.target.value})
  };
  render() {
    return (
        <div>
          <TextForm changeAuthor={this.changeAuthor} changeMessage={this.changeMessage} inpAuthor={this.state.inpAuthor} inpVal={this.state.Message}/>
        </div>
    );
  }
}

export default App;
