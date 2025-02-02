import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";
import me2 from "../assets/me2.jpg"

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am currently a fourth year <b>Computer Engineering</b> major with a <b>Computer Science</b> minor at
        <a href="https://www.rutgers.edu/about-rutgers">
          {" "}
          Rutgers University
        </a>
        .
      </p>
    );
    const two = (
      <p>
        Outside of work, I'm interested in following the developments of
        technology. I overdress a lot. And hit tennis balls.
      </p>
    );
    const three = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{" "}
        <a href="mailto:sahej.bansal@rutgers.edu">
          sahej.bansal@rutgers.edu
        </a>{" "}
        and let's talk.
      </p>
    );
    const desc_items = [one, two];

    const tech_stack = [
      "Javascript ES6+",
      "AWS",
      "React.js",
      "Java",
      "Node.js",
      "HTML & CSS"
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img src={me2} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
