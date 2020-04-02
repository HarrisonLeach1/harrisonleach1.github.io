import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Grid, Container, Divider, Header, Image, List, Segment } from "semantic-ui-react";

const Footer = () => (
  <Segment inverted vertical style={{ margin: "0em 0em 0em", padding: "5em 0em" }}>
    <Container textAlign="center">
      <Grid divided inverted stackable>
        <Grid.Column width={3}>
          <Header inverted as="h4" content="Pages" />
          <List link inverted>
            <List.Item as={Link} smooth to="/">
              Home
            </List.Item>
            <List.Item as={Link} smooth to="/About">
              About
            </List.Item>
            <List.Item as={Link} smooth to="/Projects">
              Projects
            </List.Item>
            <List.Item as={Link} smooth to="/CV">
              CV
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header inverted as="h4" content="Contact Me" />
          <List link inverted>
            <List.Item as="a" to="https://www.linkedin.com/in/harrison-leach">
              LinkedIn
            </List.Item>
            <List.Item as="a" to="https://github.com/HarrisonLeach1">
              GitHub
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header inverted as="h4" content="Site built with" />
          <List link inverted>
            <List.Item as="a" href="https://reactjs.org/">
              React (CRA)
            </List.Item>
            <List.Item as="a" href="https://semantic-ui.com/">
              Semantic UI
            </List.Item>
            <List.Item as="a" to="https://sass-lang.com/">
              Sass
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={7}>
          <Header inverted as="h4" content="Updated" />
          <p>Harrison Leach, March 2020</p>
        </Grid.Column>
      </Grid>

      <Divider inverted section />
      <Image centered size="mini" src={require("../../Assets/images/icon-large.png")} />
      <List horizontal inverted divided link size="small">
        <List.Item as="a" href="https://github.com/HarrisonLeach1/harrisonleach1.github.io/tree/development">
          Site source code
        </List.Item>
        <List.Item as="a" href="">
          No rights reserved
        </List.Item>
      </List>
    </Container>
  </Segment>
);

export default Footer;
