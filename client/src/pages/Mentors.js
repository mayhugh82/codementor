import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Mentors extends Component {
  state = {
    mentors: [],
    name: "",
    languages: "",
    about: "",
  };

  componentDidMount() {
    this.loadMentors();
  }

  loadMentors = () => {
    API.getMentors()
      .then((res) =>
        this.setState({ mentors: res.data, name: "", languages: "", about: "" })
      )
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.name && this.state.languages) {
      API.saveMentor({
        name: this.state.name,
        languages: this.state.languages,
        about: this.state.about,
      })
        .then((res) => this.loadMentors())
        .catch((err) => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Mentor Sign Up</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Full Name (required)"
              />
              <Input
                value={this.state.languages}
                onChange={this.handleInputChange}
                name="languages"
                placeholder="Coding languages you would like to teach (required)"
              />
              <TextArea
                value={this.state.about}
                onChange={this.handleInputChange}
                name="about"
                placeholder="Professional information about yourself (Optional - please add your email if you would like to be contacted by a student)"
              />
              <FormBtn
                disabled={!(this.state.languages && this.state.name)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Mentor List</h1>
            </Jumbotron>
            {this.state.mentors.length ? (
              <List>
                {this.state.mentors.map((mentor) => (
                  <ListItem key={mentor._id}>
                    <Link to={"/mentors/" + mentor._id}>
                      <strong>
                        Name: {mentor.name} <br></br> Languages: {mentor.languages}{" "}
                        <br></br>
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Mentors;
