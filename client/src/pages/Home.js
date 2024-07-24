import React from "react";
import { useTheme } from "../context/ThemeContext";
import Typewriter from "typewriter-effect";
import Resume from "../assets/docs/resume.txt";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsMoonStarsFill size={30} />
          ) : (
            <BsSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <h2>Hi👋 I'm a web developer</h2>
          <h1>
            <Typewriter
              options={{
                strings: ["Full-Stack Developer !", "Mern-Stack Developer !"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-buttons">
            <a
              className="btn btn-hire"
              href="https://api.whatsapp.com/send?phone=7782048208"
              rel="noreferrer"
              target="_blank"
            >
              Hire Me
            </a>
            <a className="btn btn-cv" href={Resume} download="My_resume.pdf">
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
