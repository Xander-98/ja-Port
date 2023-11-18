import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import TypeWriter from "typewriter-effect";
function Home() {
  return (
    <div className="home">
      <div className="about">
        <h1>
          <img src=""></img>
        </h1>
        <h2>
          <TypeWriter
            options={{
              strings: ["My name is James Alexander", "and", "I love Coding!", "Thanks for visiting!"],
              autoStart: true,
              pause: 5,
              loop: true,
            }}
          />
        </h2>
        <div className="prompt">
          <p>A software developer with a passion for designing, learning, and problem solving. </p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, jQuery, SASS, HTML, CSS, Redux, React Native, Vue.js, Codepen, Angular, BootStrap, MaterialUI,
              Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>Ruby on Rails, Nodejs, Express.js, Laravel</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, TypeScript, Go</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
