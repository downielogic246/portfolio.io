import React, { useRef, useState } from "react";

const projects = [
  {
    id: "hubb",
    name: "Hubb Central Services Inc.",
    description:
      "This website was my first major project. Within this website, only utilized Vanilla Javascript, as well as HTML and CSS.",
    techStack: ["square-js", "html5", "css3-alt"],
    pathLocation: "/hubbcentralservicesinc.github.io/",
  },
  {
    id: "chaunie",
    name: "Chaunie's",
    description:
      "This website was my first complete react project. Examples of hooks that were used are useState and useRef.",
    techStack: ["react", "square-js", "html5", "css3-alt"],
    pathLocation: "/chaunies.io/",
  },
];

const HomePage = () => {
  const aboutHeadingRef = useRef();

  const [animateAbout, setAnimateAbout] = useState("");

  window.addEventListener("scroll", () => {
    setAnimateAbout(
      scrollY > aboutHeadingRef.current.clientHeight && "animate-about"
    );
  });

  const changeLocation = (location) => {
    let newURL = window.location.origin + location;

    window.open(newURL, "_blank");
  };

  return (
    <>
      <section>
        <h1 className="heading welcome">welcome to my portfolio</h1>
        <div className="intro-container">
          <div title="marlon" className="marlon"></div>
          <div className="brief-container">
            <h2 className="sub-heading career">
              Front-End Developer | Web Designer
            </h2>
            <h3 className="third-heading name">Marlon Downie</h3>
            <article className="intro-brief">
              I'm Marlon Downie. A student driven by the passion for web design
              and graphic design based in Barbados.
            </article>
            <div className="tech-stack">
              <i className="fa-brands fa-react"></i>
              <i className="fa-brands fa-square-js"></i>
              <i className="fa-brands fa-html5"></i>
              <i className="fa-brands fa-css3-alt"></i>
              <i className="fa-brands fa-bootstrap"></i>
            </div>
          </div>
        </div>
      </section>
      {/* <video
        src="../../../public/mp4/FIRST VIDOE EDIT.mp4"
        className="about-video"
        type="video/mp4"
        autoPlay
        muted
        loop
      >
        Video not supported
      </video> */}
      <section className="about-container">
        <h1 className="heading about" ref={aboutHeadingRef}>
          about
        </h1>
        <div className={animateAbout}>
          <article className="intro-about ">
            As a student pursuing a BSc. Computer Science at the University of
            the West Indies Cavehill Campus, only four years ago I had no kind
            of motivation to do any Computer Studies related subjects, including
            programming and web design, until I completed CSEC Information
            Technology and attained a Grade I. Since then, designing and
            programming became more than a subject, it became a lifestyle where
            everyday is day of seeing code.
          </article>
        </div>
      </section>

      <section className="projects-container">
        <h1 className="heading projects">Projects</h1>
        {projects.map((project) => {
          return (
            <div className="project-container">
              <div className={"project-image " + project.id}>
                {project.name}
              </div>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((language) => {
                  return <i className={"fa-brands fa-" + language}></i>;
                })}
              </div>
              <button
                className="visit"
                onClick={() => changeLocation(project.pathLocation)}
              >
                Visit site
              </button>
            </div>
          );
        })}
        <div className="small-pcontainer">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            {projects.map((project) => {
              return (
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={"#" + project.id}
                      aria-expanded="false"
                      aria-controls={project.id}
                    >
                      {project.name}
                    </button>
                  </h2>
                  <div
                    id={project.id}
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <div className={"project-image " + project.id}></div>
                      <p className="project-description">
                        {project.description}
                      </p>
                      <div className="tech-stack">
                        {project.techStack.map((language) => {
                          return <i className={"fa-brands fa-" + language}></i>;
                        })}
                      </div>
                      <button
                        className="visit"
                        onClick={() => changeLocation(project.pathLocation)}
                      >
                        Visit site
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
