import React, { Component } from 'react';

//components
import { Header, Icon, Item, Grid, Progress } from 'semantic-ui-react'
import { Parallax } from 'react-parallax';

class About extends Component {
  render() {
    return (
          <Parallax
            blur={0}
            bgImage={require('../../Assets/images/background-boardwalk-clouds-808465.jpg')}
            bgImageAlt="Moutain Background"
            strength={300}>
            <div className = 'dark-bg'>
              <Header as='h2' icon textAlign='center'>
                <Icon name='user' circular inverted disabled/>
                <Header.Content>About Me</Header.Content>
              </Header>
              <div className = 'p1'>
                <p>
                A software engineering student who enjoys coding and playing football.
                </p>
              </div>
            </div>
            <div className ='light-bg'>
              <Header as='h2' icon textAlign='center'>
                <Icon name='graduation' circular/>
                <Header.Content>Education</Header.Content>
              </Header>
              <div className ='item-section'>
                <Item.Group>
                  <Item>
                    <Item.Image size='small' src={require('../../Assets/images/UoA.png')} />

                    <Item.Content>
                      <Item.Header as='h2'>BE in Software Engineering (Hons)</Item.Header>
                      <Item.Meta>The University of Auckland</Item.Meta>
                      <Item.Meta>2017 - Present</Item.Meta>
                      <Item.Description>
                        <p>
                          Currently in my second year of study, so far I have taken papers on Algorithms and Data Structures, Object-Oriented Design,
                          Computer Engineering and Mathematical Modelling. I am a member of the Software Engineering Students Association (SESA) and 
                          Auckland University Program for Space Systems (APSS).
                          I also Volunteer for the UoA Volunteers club and an in-school volunteer
                          for <a href = "http://www.ewb.org.nz/"> Engineers Without Borders. </a> <br/>
                          <b>Achievements:</b>
                          <ul>
                            <li>2017 UoA Deans Honours List</li>
                            <li>Received UoA Maori Academic Excellence Scholarship</li>
                            <li>Received Fletchers Employee Educational Fund</li>
                          </ul>
                        </p>
                      </Item.Description>
                      <Item.Extra> GPA: 8.917 / 9.0 </Item.Extra>
                    </Item.Content>
                  </Item>

                  <Item>
                    <Item.Image size='small' src={require('../../Assets/images/WHS.png')} />

                    <Item.Content>
                      <Item.Header as='h2'>NCEA Level 3 (Excellence endorsed)</Item.Header>
                      <Item.Meta>Wainuiomata High School</Item.Meta>
                      <Item.Meta>2014 - 2016</Item.Meta>
                      <Item.Description>
                        <p>
                          <b>Achievements:</b>
                          <ul>
                            <li>2016: Awarded Dux</li>
                            <li>2014 - 2015: Top Student in year group</li>
                          </ul>
                        </p>
                      </Item.Description>
                    </Item.Content>
                  </Item>
                </Item.Group>
            </div>
            </div>
            <div className ='dark-bg'>
              <Header as='h2' icon textAlign='center'>
                <Icon name='code' circular inverted disabled/>
                <Header.Content>Skills</Header.Content>
              </Header>
              <Grid columns = {2}>
                <Grid.Row>
                  <Grid.Column>
                    <Progress percent = {90} indicating inverted> Java </Progress>
                  </Grid.Column>
                  <Grid.Column>
                    <Progress percent = {70} indicating inverted> C </Progress>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Progress percent = {70} indicating inverted> React </Progress>
                  </Grid.Column>
                  <Grid.Column>
                    <Progress percent = {70} indicating inverted> HTML </Progress>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Progress percent = {70} indicating inverted> CSS / SCSS </Progress>
                  </Grid.Column>
                  <Grid.Column>
                    <Progress percent = {60} indicating inverted> JavaScript </Progress>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Progress percent = {40} indicating inverted> Swift </Progress>
                  </Grid.Column>
                  <Grid.Column>
                    <Progress percent = {40} indicating inverted> Python </Progress>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
            <div className ='light-bg'>
              <Header as='h2' icon textAlign='center'>
                <Icon name='briefcase' circular/>
                <Header.Content>Work Experience</Header.Content>
              </Header>
              <div className ='item-section'>
                  <Item.Group>
                    <Item>
                      <Item.Image size='small' src={require('../../Assets/images/MyTuition.png')} />
                      <Item.Content>
                        <Item.Header as='h2'>Private Tutor</Item.Header>
                        <Item.Meta>MyTuition Ltd.</Item.Meta>
                        <Item.Meta>Feb 2018 - Present</Item.Meta>
                        <Item.Description>
                          <p>Involves scheduling lessons and travelling to student's homes. Providing non-classroom support and employing learning 
                          strategies to help students understand the more difficult concepts. Monitoring the student's progress and ensuring they are well 
                          prepared for upcoming assignments and tests. Communicating the student's progress to the parents in written reports.</p>
                        </Item.Description>
                      </Item.Content>
                    </Item>
                    <Item>
                      <Item.Image size='small' src={require('../../Assets/images/Higgins.png')} />
                      <Item.Content>
                        <Item.Header as='h2'>Quality Assurance/ Labourer</Item.Header>
                        <Item.Meta>Higgins Contractors Ltd.</Item.Meta>
                        <Item.Meta>Nov 2017 - Feb 2018</Item.Meta>
                        <Item.Description>
                          <p>Involved measurements and calculations of materials required for jobs. Mitigated losses by making accurate asphalt order 
                          quantities. Cooperated with the foreman and crew to ensure job constraints were being met.</p>
                        </Item.Description>
                      </Item.Content>
                    </Item>
                    <Item>
                      <Item.Image size='small' src={require('../../Assets/images/TheSurveyingCompany.png')} />
                      <Item.Content>
                        <Item.Header as='h2'>Assistant Surveyor/ Chainman</Item.Header>
                        <Item.Meta>The Surveying Company Ltd.</Item.Meta>
                        <Item.Meta>Dec 2015 - Feb 2016 (Casual Positions)</Item.Meta>
                        <Item.Description>
                          <p>Operation of equipment such as theodolites, total stations, reflectors and GPS systems. Communicated with surveyors 
                          to assist them in completing topological surveys and laying out stakes for land development.</p>
                        </Item.Description>
                      </Item.Content>
                    </Item>
                  </Item.Group>
              </div>
            </div>
          </Parallax>
    );
  }
}

export default About;