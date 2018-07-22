import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Button, Grid } from 'semantic-ui-react';

class Homepage extends Component {
  render() {
    return (
      <div className = 'homepage'>
        <Grid centered>
          <Grid.Row>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
        	    <h1>Hi there.</h1>
              <div className = 'buttons'>
               <Link to ="/About"><Button inverted size = 'huge'> About Me </Button></Link>
               <Link to ="/CV"><Button inverted size = 'huge'> My CV </Button></Link>
               <Link to ="/Contact"><Button inverted size = 'huge'> Contact </Button></Link>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Homepage;