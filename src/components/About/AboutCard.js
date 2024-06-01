import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hemant Chaudhary </span>
            from <span className="purple"> Churu, India.</span>
            <br />
            I have currently pursuing Final year of my <span className="purple"> BTech in Computer Science and Engineering(CSE)</span> BTech in Computer Science and Engineering(CSE) at <span className="purple">NIT    Agartala.</span>
         
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Online Games and Sports like Cricket,Kabaddi..
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Tech Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Hemant</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
