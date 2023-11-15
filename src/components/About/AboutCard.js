import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Agam Singh </span>
            from <span className="purple"> Kanpur, Uttar Pradesh,India.</span>
            <br />
            I am currently Learning MERN Stack Web Development.
            <br />
            I am Persuing Bachelor of Technology in Computer Science and Engineering from Naraina College Of Engineering and Technology, Kanpur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Dont Change Yourself according to world change the world itself!"{" "}
          </p>
          <footer className="blockquote-footer">Agam Singh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
