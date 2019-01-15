import React, { Component } from 'react';
import './app.css';
import Clock from './Clock';
import { Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: "June 15, 2019",
      newDeadline: ""
    }
  }

  changeDeadline(){
    this.setState({deadline: this.state.newDeadline})
  }

  render() {
    return (
      <div className="App">
          <div className="App-title">
            Countdown to {this.state.deadline} 
          </div>
            <Clock 
              deadline={this.state.deadline}
            />
          <Form inline>
            <FormControl className="Deadline-input"
              value={this.state.newDeadline}
              placeholder="Enter date"  
              onChange={event => this.setState({newDeadline: event.target.value})}
              onKeyPress={event => {                
                if(event.key === 'Enter'){
                  this.changeDeadline();
                  event.preventDefault();  //prevent the pressing of enter triggering a submit (form reload)
                }
              }}       
            />
            <Button className="Deadline-submit"
              onClick={() => this.changeDeadline()}>
              Submit
            </Button>
          </Form>
      </div>
    )
  }
}

export default App;
