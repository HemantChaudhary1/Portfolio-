import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";


// Background
// I've doing a Bachelor's in Science, by the way. I've worked with small teams and done some Hackathons too. Always trying to learn new tech stuff - I'm kinda addicted to keeping up with what's new in the industry!

// Skills
// My main skills? I'm really good with TypeScript, JavaScript, React, and Node.js. I also know my way around NextJS, ExpressJS, and a bunch of other cool libraries. I can make websites look great on any device, and I get the whole UI/UX thing. Oh, and I'm pretty handy with Git for keeping track of all my code changes.

// Interests
// When I'm not coding, I'm usually out playing cricket . I love keeping up with the latest tech stuff online too. In my free time, you'll find me binge-watching anime or catching some action movies. I'm always tinkering with my own little projects on the side. What really gets me excited is using tech to solve real problems and make a difference, you know?


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hey! I'm <span className="purple">Hemant Chaudhary </span>. I'm really into making websites. 
          Been doing it for about a year now. I work with stuff like JavaScript, React, and Node.js. 
          Love making sites that look good and work great!
          <br />
          I am currently pursuing Final year of my <span className="purple"> B.Tech in Computer Science and Engineering(CSE)</span> at <span className="purple">NIT Agartala.</span>
            <br />
            <br />
            When I'm not coding
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> I'm usually out playing cricket .  
              
            </li>
            <li className="about-activity">
              <ImPointRight />  I love keeping up with the latest tech stuff online too. 
            </li>
            <li className="about-activity">
              <ImPointRight /> In my free time, you'll find me binge-watching anime or catching some action movies. 
            </li>
            <li className="about-activity">
              <ImPointRight />  I'm always tinkering with my own little projects on the side. 
            </li>
            <li className="about-activity">
              <ImPointRight /> In my free time, you'll find me binge-watching anime or catching some action movies. 
            </li>
            <li className="about-activity">
              <ImPointRight />  What really gets me excited is using tech to solve real problems and make a difference, you know?
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
