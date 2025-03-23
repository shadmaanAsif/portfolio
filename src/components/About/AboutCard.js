import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohammad Shadmaan Asif </span>
            from <span className="purple"> Dubai</span>
            <br />I am working as Senior Software Engineer at Seera Almosfar
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Coding and Learning Things which helps me Professionally and Personally
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Create new ideas and create Solutions for those ideas"{" "}
          </p>
          <footer className="blockquote-footer">Asif</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
