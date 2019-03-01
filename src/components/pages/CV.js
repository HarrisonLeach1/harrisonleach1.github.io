import React, { Component } from 'react';

import { Header, Icon, Button, Image } from 'semantic-ui-react';
import { Parallax } from 'react-parallax';

class CV extends Component {
  render() {
    return (
      <div className = 'cv'>
        <Parallax
          blur={0}
          bgImage={require('../../Assets/images/background-boardwalk-clouds-808465.jpg')}
          bgImageAlt="Moutain Background"
          strength={400}>
          <div className = 'box dark-bg'>
            <Header as='h2' icon textAlign='center'>
              <Icon name='file alternate' circular inverted disabled/>
              <Header.Content>My CV</Header.Content>
            </Header>
              <Button color= 'grey' inverted as ='a' href = "HarrisonLeachCV.pdf" download>
                <Icon name='download'/> Download PDF
              </Button>
            <div className = 'imageBox'>
              <Image size = 'big' src = {require('../../Assets/images/HarrisonLeachCV.jpg')} centered/>
            </div>
          </div>
        </Parallax>
      </div>
    );
  }
}

export default CV;