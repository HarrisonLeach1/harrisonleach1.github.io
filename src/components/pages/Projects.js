import React, { Component } from 'react';

import { Header, Icon, Card, Image, Label, Button } from 'semantic-ui-react';
import { Parallax } from 'react-parallax';

class Projects extends Component {
  render() {
    return (
      <div className = 'projects'>
        <Parallax
          blur={0}
          bgImage={require('../../Assets/images/background-boardwalk-clouds-808465.jpg')}
          bgImageAlt="the cat"
          strength={400}>
          <div className = 'box dark-bg'>
            <Header as='h2' icon textAlign='center'>
              <Icon name='computer' circular inverted disabled/>
              <Header.Content>Projects</Header.Content>
            </Header>
              <Button color= 'grey' inverted as = 'a' href = "https://github.com/HarrisonLeach1">
                <Icon name='github'/> GitHub
              </Button>
            <div className = 'cardBox'>
              <Card fluid>
                <Image fluid src= {require('../../Assets/images/website.PNG')}/>
                <Card.Content>
                  <Card.Header>This Website</Card.Header>
                  <Card.Meta>July 2018</Card.Meta>
                  <Card.Description>This website was built using <b>React</b> and the <a href = "https://react.semantic-ui.com/introduction" >
                  Semantic UI React </a> component library. Project packages and dependencies were managed using <b>Node</b>.  Sass was
                  used for <b>CSS</b> pre-processing. <b>Gulp</b> was used for task automation including <b>SCSS</b> to <b>CSS</b> compilation
                  , <b>CSS</b> uglifying and minifying. The website is hosted on GitHub pages.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Label> <Icon name ='react' color = 'blue'/>React.js</Label>
                  <Label><Icon name ='html5' color = 'orange'/>HTML</Label>
                  <Label><Icon name ='css3 alternate' color = 'blue'/>SCSS / CSS</Label>
                  <Label><Icon name ='js' color = 'yellow'/>JavaScript</Label>
                  <a href = "https://gulpjs.com/"><Label><Icon name ='gulp' color = 'red'/>Gulp</Label></a>
                  <Label><Icon name ='node' color = 'grey'/>Node</Label>
                </Card.Content>
              </Card>
            </div>
          </div>
        </Parallax>
      </div>
    );
  }
}

export default Projects;