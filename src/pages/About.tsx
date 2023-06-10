import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

import t1 from "../assets/team1.jpg";
import t2 from "../assets/team2.jpg";
import t3 from "../assets/team3.jpg";

function About() {
  return (
    <Container>
      <div className="m-5">
        <h1 className="text-center">About Us </h1>
        <p className="m-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit
          architecto, nesciunt dicta atque hic aspernatur delectus assumenda at,
          rem id consequuntur, iusto quis eligendi molestias facere ducimus.
          Minus, cum explicabo velit saepe debitis, fugit reprehenderit labore
          voluptas ab iste eveniet obcaecati vel ipsa. Sint repellendus
          cupiditate explicabo aliquid rem, vitae doloremque error dolore alias
          quam dolores placeat voluptates reiciendis dicta modi voluptatum
          voluptatem molestias distinctio magni? Ipsam unde incidunt, illo
          laudantium assumenda voluptates veniam cumque, odio ipsum, aliquid sit
          soluta doloremque porro autem eligendi dolores est accusantium
          repudiandae natus in tempore. Eum asperiores ipsam rem odit
          dignissimos reiciendis debitis.
        </p>
      </div>
      <Row md={2} xs={1} lg={3} className="g-3 mt-5">
        <Col>
          <Card>
            <Card.Img variant="top" src={t1} style={{ objectFit: "cover" }} />
            <Card.Body>
              <Card.Title>Jane Doe</Card.Title>
              <Card.Title className="text-muted" style={{fontSize: "14px"}}>CEO & Founder</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                omnis nam soluta minima nemo commodi saepe excepturi earum,
                magni vel.
              </Card.Text>
              <Card.Text className="text-muted">jane@example.com</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={t2} style={{ objectFit: "cover" }} />
            <Card.Body>
              <Card.Title>Mike Ross</Card.Title>
              <Card.Title className="text-muted" style={{fontSize: "14px"}}>Art Director</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                omnis nam soluta minima nemo commodi saepe excepturi earum,
                magni vel.
              </Card.Text>
              <Card.Text className="text-muted">mike@example.com</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={t3} style={{ objectFit: "cover" }} />
            <Card.Body>
              <Card.Title>John Doe</Card.Title>
              <Card.Title className="text-muted" style={{fontSize: "14px"}}>Designer</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                omnis nam soluta minima nemo commodi saepe excepturi earum,
                magni vel.
              </Card.Text>
              <Card.Text className="text-muted">john@example.com</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
