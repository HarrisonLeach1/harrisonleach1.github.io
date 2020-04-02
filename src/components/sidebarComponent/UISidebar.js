import React, { Component } from 'react';
import { Button, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'


class UISidebar extends Component {
  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (
      <div>
        <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation='overlay'
              icon='labeled'
              inverted
              onHide={this.handleSidebarHide}
              vertical
              visible={visible}
              width='thin'>
              <Link to = "/">
                <Menu.Item as='a' onClick = {this.handleSidebarHide}>
                  <Icon name='home' />
                  Home
                </Menu.Item>
              </Link>
              <Link to = "/About">
                <Menu.Item as='a' onClick = {this.handleSidebarHide}>
                  <Icon name='user' />
                  About
                </Menu.Item>
            </Link>
            <Link to = "/Projects">
                <Menu.Item as= 'a' onClick = {this.handleSidebarHide}>
                  <Icon name='computer' />
                  Projects
                </Menu.Item>
            </Link>
            <Link to = "/CV">
                <Menu.Item as='a' onClick = {this.handleSidebarHide}>
                  <Icon name='file alternate' />
                  CV
                </Menu.Item>
            </Link>
            <Link to = "/Contact">
                <Menu.Item as='a' onClick = {this.handleSidebarHide}>
                  <Icon name='envelope' />
                  Contact
                </Menu.Item>
              </Link>
            </Sidebar>
            <Sidebar.Pusher dimmed={visible}>
              <Segment basic>
                <div className = "navBar">
                  <Button inverted icon ='bars' onClick={this.handleButtonClick}/>
                  <Link to = "/"><h2> Harrison Leach</h2></Link>
                </div>
                  {this.props.children}
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
    );
  }
}

export default UISidebar;