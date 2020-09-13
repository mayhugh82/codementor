import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    mentors: {}
  };
  // When this component mounts, grab the mentors with the _id of this.props.match.params.id
  componentDidMount() {
    API.getMentors(this.props.match.params.id)
      .then(res => this.setState({ mentors: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.mentors.name} has language expertise in:{" "}
                {this.state.mentors.languages}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1 style={{ color: "#2A878C" }}>About</h1>
              <p>{this.state.mentors.about}</p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/" style={{ color: "#2A878C" }}>
              ← Back to Home
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
