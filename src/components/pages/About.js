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
            <div className = 'about'>
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
                  <Icon name='briefcase' circular/>
                  <Header.Content>Work Experience</Header.Content>
                </Header>
                <div className ='item-section'>
                    <Item.Group>
                    <Item>
                        <Item.Image size='small' src={require('../../Assets/images/Nintex Promapp.png')} />
                        <Item.Content>
                          <Item.Header as='h2'>Software Developer Intern</Item.Header>
                          <Item.Meta>Nintex Promapp</Item.Meta>
                          <Item.Meta>Nov 2019 - Feb 2020</Item.Meta>
                          <Item.Description>
                            <p>Full-stack development of new features using React, TypeScript and .NET Core. 
                              Cloud Development using AWS and Azure. Agile development using Scrum
                                </p>
                          </Item.Description>
                          <br/>
                        
                          <Item.Meta>July 2019</Item.Meta>
                          <Item.Description>
                            <p>Full-stack development of new features on a React, TypeScript frontend and a .NET CQRS backend.</p>
                          </Item.Description>
                          <br/>
                          <Item.Meta>Nov 2018 - Feb 2019</Item.Meta>
                          <Item.Description>
                            <p>Configured basic AWS EC2, Lambda, S3, IAM and SNS functionality via Terraform. Implemented back-end improvements using C#,
                               .NET Framework, ASP.NET MVC, Entity Framework, and SQL Server. Designed testable code, wrote unit tests using NUnit and Moq. 
                               Improved application security by fixing vulnerabilities revealed from a penetration test. Proficient with dependency 
                               injection frameworks. Performed code reviews to improve code quality. </p>
                          </Item.Description>
                        </Item.Content>
                      </Item>
                      <Item>
                        <Item.Image size='small' src={require('../../Assets/images/MyTuition.png')} />
                        <Item.Content>
                          <Item.Header as='h2'>Private Tutor</Item.Header>
                          <Item.Meta>MyTuition Ltd.</Item.Meta>
                          <Item.Meta>Feb 2018 - Nov 2018</Item.Meta>
                          <Item.Description>
                            <p>Involves scheduling lessons and travelling to student's homes. Providing non-classroom support and employing learning 
                            strategies to help students understand the more difficult concepts. Monitoring the student's progress and ensuring they are well 
                            prepared for upcoming assignments and tests. Communicating the student's progress to the parents in written reports.</p>
                          </Item.Description>
                        </Item.Content>
                      </Item>
                    </Item.Group>
                </div>
              </div>
              <div className ='dark-bg'>
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
                            Currently in my third year of study, so far my favourite papers include: Algorithms and Data Structures, Object-Oriented Design,
                            Software Quality Assurance, and Computer Engineering.
                            <br/>
                          </p>
                            <b>Achievements:</b>
                            <ul>
                              <li>2018 and 2017 UoA Deans Honours List</li>
                              <li>Received UoA Maori Academic Excellence Scholarship</li>
                              <li>Received Fletchers Employee Educational Fund</li>
                            </ul>
                        </Item.Description>
                        <Item.Extra> GPA: 8.875 / 9.0 </Item.Extra>
                      </Item.Content>
                    </Item>

                    <Item>
                      <Item.Image size='small' src={require('../../Assets/images/WHS.png')} />

                      <Item.Content>
                        <Item.Header as='h2'>NCEA Level 3 (Excellence endorsed)</Item.Header>
                        <Item.Meta>Wainuiomata High School</Item.Meta>
                        <Item.Meta>2014 - 2016</Item.Meta>
                        <Item.Description>
                            <b>Achievements:</b>
                            <ul>
                              <li>2016: Awarded Dux</li>
                              <li>2014 - 2015: Top Student in year group</li>
                            </ul>
                        </Item.Description>
                      </Item.Content>
                    </Item>
                  </Item.Group>
              </div>
              </div>
            </div>
          </Parallax>
    );
  }
}

export default About;