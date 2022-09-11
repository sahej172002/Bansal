import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";
import nomansland from "../assets/nomansland.png";
import truth from "../assets/truth.png";
import talltales from "../assets/talltales.png"
import portfolio from "../assets/portfolio.png"

class Projects extends React.Component {
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
    // const spotlightProjects = {
    //   "No Man's Land": {
    //     title: "no man's land",
    //     desc:
    //       "A third-person survival-mode game where you battle against time and space to return to Earth.",
    //     techStack: "C# (UNITY)",
    //     link: "https://github.com/slakh96/no-mans-land",
    //     open: "https://gazijarin.itch.io/no-mans-land",
    //     image: nomansland
    //   },
    //   Truth: {
    //     title: "truth",
    //     desc:
    //       "A three.js simulation of the planet system revolving around a monolith.",
    //     techStack: "JAVASCRIPT (THREE.JS)",
    //     link: "https://github.com/gazijarin/truth",
    //     open: "https://gazijarin.github.io/Truth/",
    //     image: truth
    //   },
    //   "Tall Tales": {
    //     title: "tall tales",
    //     desc:
    //       "A multi-player story-telling web game for 3-5 players. Its usage of sockets to allow for concurrent gameplay, connecting friends across the internet.",
    //     techStack: "NODE.JS (SOCKET.IO), REACT.JS, MONGODB",
    //     link: "https://github.com/gazijarin/TallTales",
    //     open: "https://talltales.herokuapp.com/",
    //     image: talltales
    //   },
    //   Portfolio: {
    //     title: "portfolio.js",
    //     desc:
    //       "A small JS library that helps with clear and succinct data presentation.",
    //     techStack: "NODE.JS (EXPRESS.JS)",
    //     link: "https://github.com/gazijarin/Portfolio.js",
    //     open: "https://afternoon-ocean-92382.herokuapp.com/",
    //     image: portfolio
    //   }
    // };
    const projects = {
      "Sledge": {
        desc:
          "A comprehensive judging system for hackathons created in React and HTML.",
        techStack: "ReactJS, MongoDB, Node",
        link: "https://github.com/HackRU/sledge"
      },
      "Song Library": {
        desc:
          "A desktop app that saves, selects and displays songs from a user created library",
        techStack: "Java, FXML",
        link: "https://github.com/sahej172002/Song-Library",
      },
      "To-do App": {
        desc:
          "Barebones web application created to facilitate local to-do lists including update, edit and delete functions",
        techStack: "Node.js (Express.js), React.js, MySQL",
        link:
          "https://github.com/sahej172002/Todo-App"
      },
      "Nitro College": {
        desc:
          "A production web application designed to support incoming and transfer college students in financial planning and application tracking.",
        techStack: "React.js, Node.js, PostgreSQL, Prisma",
        link: "https://app.nitrocollege.com/",
        open: "https://www.nitrocollege.com/"
      },
      "Scrumbooster": {
        desc:
          "A private production web app intended to provide comprehensive scrum and sprint planning functionalities to external clients",
        techStack: "Java, Android Studio",
        open: "https://intelligaia.com/"
      },
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ software-creations</span>
        </div>
        {/* <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel> */}
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
