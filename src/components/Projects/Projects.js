import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/image.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/CampusFood.jpeg";
import chatify from "../../Assets/Projects/Student_attendance.png";
import suicide from "../../Assets/Projects/CryptoTracker.jpeg";
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
              imgPath={editor}
              isBlog={false}
              title="Campus Food Delivery"
              description="A web-based platform for food delivery facility within college campus.
– Developed a food delivery web app, enhancing user experience with an intuitive interface, which increased order
efficiency by 30%.
– Integerated optimized routing to achieve reduced delivery time to 20 minutes.
– Tools & technologies used: NodeJS, MongoDb, HTML, CSS, Javascript, ReactJs, Tailwind CSS, ExpressJs."
              ghLink="https://github.com/HemantChaudhary1/Campus-food-delivery/tree/main"
              demoLink="https://campus-food-delivery.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Student Attendance Tracker"
              description="A web application for tracking student attendance.
– Architected a student attendance tracker web app, automating attendance calculations and reducing manual errors by
80%.
– Facilitated students to track their attendance, ensuring they meet the 75% threshold for class requirements.
– Tools & technologies used: ReactJs, HTML, CSS, NodeJs, Javascript, Tailwind CSS, MongoDb."
              ghLink="https://github.com/HemantChaudhary1/Student-Attendance-Tracker"
              demoLink=""
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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
