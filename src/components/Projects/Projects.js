import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Student Attendance Tracker"
              description="Student's can Track their attendance and can bunk classes for fun 😍 build with react.js, Tailwind CSS."
              ghLink="https://github.com/HemantChaudhary1/Student-Attendance-Tracker"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="TicTacToe.com"
              description="A fun game build using HTML,CSS and JavaScript"
              ghLink="https://github.com/HemantChaudhary1/Tic-Tac-Toe"
              demoLink="https://hemantchaudhary1.github.io/Tic-Tac-Toe/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="FoodZilla"
              description="A FoodDelivery WebApp for college students on which student can order from their favorite restaurant's and Restaurant owner can add their restaurant on the app for better reach to students for more order.It is a full stack application frontend made with Reactjs,Tailwind CSS and Backend using Nodejs,express and MongoDB."
              ghLink="https://github.com/HemantChaudhary1/Campus-food-delivery/tree/main"
              demoLink="https://campus-food-delivery.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="TODO App"
              description="Is an TODO app in which you can track your daily tasks build frontend using Reactjs and Backend using Nodejs,express,MongoDb."
              ghLink="https://github.com/HemantChaudhary1/TODO-App"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Crypto-Tracker"
              description="A CryptoCurrency-Tracker which tracks your coin Realtime Information build and Gives all details of your coin using Charts using ReactJs, Chart.js, Tailwind CSS ."
              ghLink="https://github.com/HemantChaudhary1/CryptoCurrency-Tracker"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
