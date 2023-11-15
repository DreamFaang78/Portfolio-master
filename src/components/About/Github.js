import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="DreamFaang78"
        blockSize={13}
        blockMargin={5}
        color="#c084f5"
        fontSize={19}
      />
    </Row>
  );
}

export default Github;
