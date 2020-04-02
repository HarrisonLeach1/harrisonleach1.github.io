import React, { Component } from "react";

//components
import { Header, Icon, Item, Table, Image } from "semantic-ui-react";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="dark-bg">
          <div className="about-description">
            <Image fluid align="center" size="small" src={require("../../Assets/images/profile-pic.jpeg")} circular centered />

            <Header as="h2" icon textAlign="center">
              <Header.Content>About Me</Header.Content>
            </Header>
            <div className="p1">
              <p>I am a software engineering student who enjoys coding and playing football.</p>
            </div>
          </div>
        </div>
        <div className="light-bg" id="Interests">
          <Header as="h2" icon textAlign="center">
            <Icon name="heart" circular />
            <Header.Content>Interests</Header.Content>
          </Header>
          <div className="item-section">
            <Item.Group>
              <Item>
                <Table celled columns="2">
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell colSpan="2" textAlign="center">
                        I enjoy
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell textAlign="center"> Football</Table.Cell> <Table.Cell textAlign="center">Gyming</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell textAlign="center">The outdoors</Table.Cell>
                      <Table.Cell textAlign="center">The office</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell textAlign="center">Reading books</Table.Cell> <Table.Cell textAlign="center">Playing board games</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell textAlign="center">Playing video games</Table.Cell> <Table.Cell textAlign="center">Being indoors</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Item>
            </Item.Group>
          </div>
        </div>
        <div className="dark-bg" id="Education">
          <Header as="h2" icon textAlign="center">
            <Icon name="graduation" circular />
            <Header.Content>Education</Header.Content>
          </Header>
          <div className="item-section">
            <Item.Group>
              <Item>
                <Item.Image size="small" src={require("../../Assets/images/UoA.png")} />
                <Item.Content>
                  <Item.Header as="h2">BE in Software Engineering (Hons)</Item.Header>
                  <Item.Meta>The University of Auckland</Item.Meta>
                  <Item.Meta>2017 - Present</Item.Meta>
                  <Item.Description>
                    <p>
                      Currently in my fourth and final year of study, so far my favourite papers include: Algorithms and Data Structures, Object-Oriented
                      Design, Software Architecture, Software Design and Database systems.
                      <br />
                    </p>
                    <b>Achievements:</b>
                    <ul>
                      <li>2018 and 2017 UoA Deans Honours List</li>
                      <li>Received UoA Maori Academic Excellence Scholarship</li>
                      <li>Received Fletchers Employee Educational Fund</li>
                    </ul>
                    <h4>Notable courses:</h4>
                    <ul>
                      <li>
                        <b>Software Architecture</b>
                        <br />
                        Architecting web service applications for scalability, performance, availability and modifiability
                      </li>

                      <li>
                        <b>Artificial Intelligence</b>
                        <br />
                        Acquisition, representation, and use of knowledge for artificial intelligence.
                      </li>

                      <li>
                        <b>Software Engineering Design 2</b>
                        <br />
                        Two 6-week long group projects using different SDLC methodologies
                      </li>

                      <li>
                        <b>Fundamentals of Database Systems</b>
                        <br />
                        Covers data organisation, transactions and writing relational DBMS queries in SQL, relational calculus and algebra
                      </li>

                      <li>
                        <b>Computer Networks</b>
                        <br />
                        Physical networks, TCP/IP protocols, switching methods, network layering and components, network services.
                      </li>

                      <li>
                        <b>Human-Computer Interaction</b>
                        <br />
                        User interface design, user-centred design process, interface usability evaluation methods involving group design projects.
                      </li>

                      <li>
                        <b>Object-Oriented Software Construction</b>
                        <br />
                        OO software development with Java teaching polymorphism, inheritance, encapsulation and abstraction. Use of design patterns.
                      </li>

                      <li>
                        <b>Data Structures and Algorithms</b>
                        <br />
                        Introduction to the analytical and empirical behaviour of basic algorithms and data structures.
                      </li>

                      <li>
                        <b>Mathematical Modelling</b>
                        <br />
                        Data analysis and statistics, linear algebra, probability and Markov processes
                      </li>
                    </ul>
                  </Item.Description>
                  <Item.Extra> GPA: 8.8 / 9.0 </Item.Extra>
                </Item.Content>
              </Item>

              <Item>
                <Item.Image size="small" src={require("../../Assets/images/WHS.png")} />

                <Item.Content>
                  <Item.Header as="h2">NCEA Level 3 (Excellence endorsed)</Item.Header>
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
        <div className="light-bg" id="Experience">
          <Header as="h2" icon textAlign="center">
            <Icon name="briefcase" circular />
            <Header.Content>Experience</Header.Content>
          </Header>
          <div className="item-section">
            <Item.Group>
              <Item>
                <Item.Image size="small" src={require("../../Assets/images/Nintex Promapp.png")} />
                <Item.Content>
                  <Item.Header as="h2">Software Developer Intern</Item.Header>
                  <Item.Meta>Nintex Promapp</Item.Meta>
                  <p>
                    "{" "}
                    <i>
                      Simple. Social. Sharable. Build, improve and share process knowledge from a central online repository with Nintex Promapp's business
                      process management (BPM) software. Turn complex process maps, Visio charts and procedure documents into clean, simple process maps that
                      everyone can find and follow.
                    </i>
                    " - promapp.com
                  </p>
                  <br />
                  <Item.Meta>Nov 2019 - Feb 2020</Item.Meta>
                  <Item.Description>
                    <p>
                      Full-stack development of new features using React, TypeScript and .NET Core. Cloud Development using AWS and Azure. Agile development
                      using Scrum
                    </p>
                  </Item.Description>
                  <br />

                  <Item.Meta>July 2019</Item.Meta>
                  <Item.Description>
                    <p>Full-stack development of new features on a React, TypeScript frontend and a .NET CQRS backend.</p>
                  </Item.Description>
                  <br />
                  <Item.Meta>Nov 2018 - Feb 2019</Item.Meta>
                  <Item.Description>
                    <p>
                      Configured basic AWS EC2, Lambda, S3, IAM and SNS functionality via Terraform. Implemented back-end improvements using C#, .NET Framework,
                      ASP.NET MVC, Entity Framework, and SQL Server. Designed testable code, wrote unit tests using NUnit and Moq. Improved application security
                      by fixing vulnerabilities revealed from a penetration test. Proficient with dependency injection frameworks. Performed code reviews to
                      improve code quality.
                    </p>
                  </Item.Description>
                  <br />
                  <h4>Technologies used</h4>
                  <ul>
                    <li>C#</li>
                    <li>.NET</li>
                    <li>SQL</li>
                    <li>Azure</li>
                    <li>AWS</li>
                    <li>Terraform</li>
                    <li>React</li>
                  </ul>
                </Item.Content>
              </Item>
            </Item.Group>
          </div>
        </div>
        <div className="dark-bg" id="Skills">
          <Header as="h2" icon textAlign="center">
            <Icon name="code" circular />
            <Header.Content>Skills</Header.Content>
          </Header>
          <div className="item-section">
            <Item.Group>
              <Item>
                <Table celled columns="2">
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell colSpan="2" textAlign="center">
                        I am confident with
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell textAlign="center">TypeScript</Table.Cell> <Table.Cell textAlign="center">React</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell textAlign="center">Java</Table.Cell>
                      <Table.Cell textAlign="center">C#/.NET</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell textAlign="center">Git</Table.Cell> <Table.Cell textAlign="center">Node.js</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell textAlign="center">GraphQL</Table.Cell> <Table.Cell textAlign="center">Unit Testing</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Item>
            </Item.Group>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
