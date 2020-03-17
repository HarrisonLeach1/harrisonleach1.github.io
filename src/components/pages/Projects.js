import React, { Component } from 'react';

import { Header, Icon, Card, Image, Label, Button } from 'semantic-ui-react';
import { Parallax } from 'react-parallax';
import {DiAws, DiJava, DiUnitySmall, DiScriptcs} from "react-icons/di";

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
                <Image fluid src= {require('../../Assets/images/sunny-town.png')}/>
                <Card.Content>
                  <Card.Header>Sunny Town - Web Game</Card.Header>
                  <Card.Meta>October 2019</Card.Meta>
                  <Card.Description>A Web-based serious game aimed at promoting Climate Change awareness. Designed for children in intermediate school years (aged 12-13). Built with <b>Unity</b> and <b>C#</b> Hosted on <b>AWS S3</b>.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Label><DiScriptcs style={{color: "purple"}}/>C#</Label>
                  <Label><DiUnitySmall/>Unity</Label>
                  <Label><DiAws style={{color: "orange"}}/>AWS</Label>
                  </Card.Content>
              </Card>
              <Card fluid>
                <Image fluid src= {require('../../Assets/images/task-scheduler.png')}/>
                <Card.Content>
                  <Card.Header>Task Scheduler</Card.Header>
                  <Card.Meta>August 2019</Card.Meta>
                  <Card.Description>This project involved using artificial intelligence (AI) and parallel processing power to solve an NP-Hard 
                                    scheduling problem. Built with <b>Java</b>. Our team achieved first in class for fastest sequential execution.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Label><DiJava style={{color: "orangered"}}/>Java</Label>
                </Card.Content>
              </Card>
              <Card fluid>
                <Image fluid src= {require('../../Assets/images/website.PNG')}/>
                <Card.Content>
                  <Card.Header>This Website</Card.Header>
                  <Card.Meta>July 2018</Card.Meta>
                  <Card.Description>A Simple static website built with <b>React</b>, <b>Sass</b> and <b>Gulp</b>. Hosted on GitHub pages and is kind of mobile-friendly.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Label> <Icon name ='react' color = 'blue'/>React.js</Label>
                  <Label><Icon name ='html5' color = 'orange'/>HTML</Label>
                  <Label><Icon name ='css3 alternate' color = 'blue'/>SCSS / CSS</Label>
                  <Label><Icon name ='js' color = 'yellow'/>JavaScript</Label>
                  <a href = "https://gulpjs.com/"><Label><Icon name ='gulp' color = 'red'/>Gulp</Label></a>
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