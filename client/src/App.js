import React from "react";
import axios from 'axios';
import "./App.css";
import PlayersList from './components/PlayersLIst';
import TopBar from './components/TopBar';

export default class App extends React.Component {
  state = {
    players: []
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/players')
    .then(res => {
      console.log(res.data);
      this.setState({
        players: res.data
      })
    })
    .catch(err => {
      console.error(err.message);
    })
  }


  render() {
    return (
      <div className="App">
        <TopBar />
        <PlayersList players={this.state.players} />
      </div>
      );
  }
}

