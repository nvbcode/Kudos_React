import React, { Component } from 'react';
import Kudo from './components/Kudo';
import Axios from 'axios';

class App extends Component {

  state = {
    kudos: []
  }

  componentDidMount() {
    this.getKudos();

  };

  getKudos = () => {
    console.log('getting kudos')
    Axios.get('/api/kudo').then((res) => {
      console.log(res.data);
      this.setState({
        kudos: res.data
      })
    }).catch(function (error) {
      console.log(error);
    })
  }

  render() {
    return (
      <div className="App">
        <Kudo kudo = {this.state.kudos} />
      </div>
    );
  }
}

export default App;
