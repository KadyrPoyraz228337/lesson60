import React, {Component} from 'react';
import TextForm from "./components/form/form";

class App extends Component {
  state = {
    inpVal: ''
  };

  changeInp = e => {
    this.setState({inpVal: e.target.value})
  };
  render() {
    return (
        <div>
          <TextForm changeInp={this.changeInp} inpVal={this.state.inpVal}/>
        </div>
    );
  }
}

export default App;
