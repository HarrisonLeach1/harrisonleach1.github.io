import React, { Component } from "react";

import { HashLink as Link } from "react-router-hash-link";

import { Container, Image, Dropdown, Button, Icon, Menu, Segment, Sidebar } from "semantic-ui-react";

const Header = () => {
  return (
    <nav>
      <Menu fixed="top" inverted style={{ padding: "0 6%" }}>
        <Menu.Item as={Link} smooth to="/About" header>
          <Image size="mini" src={require("../../Assets/images/profile-pic.jpeg")} style={{ marginRight: "1.5em" }} />
          Harrison Leach
        </Menu.Item>
        <Menu.Item as={Link} smooth to="/">
          Home
        </Menu.Item>

        <Dropdown item simple text="About">
          <Dropdown.Menu>
            <Dropdown.Item as={Link} smooth to="/About#Interests">
              Interests
            </Dropdown.Item>
            <Dropdown.Item as={Link} smooth to="/About#Education">
              Education
            </Dropdown.Item>
            <Dropdown.Item as={Link} smooth to="/About#Experience">
              Experience
            </Dropdown.Item>
            <Dropdown.Item as={Link} smooth to="/About#Skills">
              Skills
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item as={Link} smooth to="/Projects">
          Projects
        </Menu.Item>
        <Menu.Item as={Link} smooth to="/CV">
          CV
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item as={Link} smooth to="/Contact">
            Contact
          </Menu.Item>
          <Menu.Item as={Link} smooth to="/" header>
            <Image size="mini" src={require("../../Assets/images/icon-large.png")} style={{ marginRight: "1.5em" }} />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </nav>
  );
};

export default Header;
