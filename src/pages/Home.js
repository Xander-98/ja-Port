import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import TypeWriter from "typewriter-effect";
import Link from "@material-ui/core/Link";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <div>
          <img
            className="self"
            src="https://media.licdn.com/dms/image/D4E03AQGzmi3g83QO5g/profile-displayphoto-shrink_800_800/0/1700346590037?e=1705536000&v=beta&t=iHL-jVXya8UQcjCQVCMBFlUts8MzJv6Jm52eV48WLMw"
            alt="me"
          ></img>
        </div>
        <h2>
          <TypeWriter
            options={{
              strings: [
                "Hi! My name is James Alexander",
                "and",
                "I love Coding!",
                "Thanks for visiting!",
                "Just Keep Swimming🐟",
              ],
              autoStart: true,
              pause: 5,
              loop: true,
            }}
          />
        </h2>
        <div className="prompt">
          <p>A software developer with a passion for designing, learning, and problem solving. </p>
          <Link
            href="https://www.linkedin.com/in/jamesalexander98?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXSCvz%2FdxRoWBH02lauGpYA%3D%3D"
            className="linkedinHomeLink"
          >
            <LinkedInIcon />
            {""}
          </Link>{" "}
          <Link href="mailto:jaymealexander.12@gmail.com" className="emailLink">
            <EmailIcon />
          </Link>
          <Link href="https://github.com/Xander-98" className="gitHubLink">
            <GithubIcon />{" "}
          </Link>
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
