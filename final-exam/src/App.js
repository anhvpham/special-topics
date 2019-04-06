import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import logo from './logo.svg';
import './App.css';

import SearchBar from "./components/SearchBar"
import Typography from "@material-ui/core/Typography"


const styles = theme => ({
  app: {
    maxWidth: "1000px",
    margin: "0 auto"
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit *2,
    height: "70vh"
  },
})


class App extends Component {

  state ={
    search: '',
    categories: '',
    location: '',
    sortby: '',
    open: '',

  }

  getResult = async (event) => {
    event.preventDefault()
    this.setState({search:event.target.elements.search.value})
  }

  render() {
    return (
      <div className="App">
           <Typography component="h2" variant="h1" align="center">
          Yelp Food App
        </Typography>
        <Paper className="paper">
          <SearchBar getResult={this.getResult}/>
        </Paper>
      </div>
    );
  }
}

export default App;
