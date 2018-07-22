import React, { Component } from 'react';
import { Form, Header, Icon, Button, Message, Divider} from 'semantic-ui-react';
import { Parallax } from 'react-parallax';


class CV extends Component {
  render() {
    return (
      <div className = 'contact'>
        <Parallax
          blur={0}
          bgImage={require('../../Assets/images/background-boardwalk-clouds-808465.jpg')}
          bgImageAlt="the cat"
          strength={300}>
          <div className = 'box dark-bg'>
            <Header as='h2' icon textAlign='center'>
              <Icon name='envelope' circular inverted disabled/>
              <Header.Content>Contact Me</Header.Content>
            </Header>
              <Button color= 'linkedin' as ="a" href = "https://www.linkedin.com/in/harrison-leach/">
                <Icon name='linkedin'/> My LinkedIn
              </Button>
            <Divider horizontal>OR</Divider>
            <div className = 'formBox'>
              <h2>Message me here:</h2>
              <Form method="POST" action="https://formspree.io/battenorryg-9753@yopmail.com">
                <Form.Input type="text" name="name" placeholder="Name" label="Name" required/>
                <Form.Input type="email" name="_replyto" placeholder="Email" label="Email" required/>
                <Form.Input type="text" name="_subject" placeholder="Subject" label="Subject" required/>
                <Form.TextArea name="message" placeholder="Message" label="Message" required/>
                <Message error/>
                <Form.Button type="submit" content = "Submit"/>
              </Form>
            </div>
          </div>
        </Parallax>
      </div>
    );
  }
}

export default CV;