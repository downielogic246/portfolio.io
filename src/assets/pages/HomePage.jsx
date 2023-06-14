import React from "react";

const HomePage = () => {
  return (
    <>
      <section>
        <h1 className="heading welcome">welcome to my portfolio</h1>
        <div className="intro-container">
          <img
            src="../../../public/photos/marlon.jpeg"
            alt="marlon"
            className="marlon"
          />
          <div className="brief-container">
            <h2 className="sub-heading career">front-end developer</h2>
            <h3 className="third-heading name">Marlon Downie</h3>
            <article className="intro-brief">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              quod possimus minus veniam beatae fugiat magnam quaerat quos,
              accusamus, optio, nobis iste. Recusandae facilis porro repellat
              consequuntur culpa tempora adipisci quas illo magni pariatur,
              iste, corrupti dolore nulla aperiam voluptatibus!
            </article>
          </div>
        </div>
      </section>
      <section className="about-container">
        <h1 className="heading about">about</h1>
        <div>
          <article className="intro-about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit ab, sapiente saepe et ratione possimus necessitatibus
            repudiandae doloremque hic nulla pariatur ipsam ut. Dolorem, et
            numquam? Consectetur suscipit vel odio eligendi quaerat. Omnis,
            iusto quod. Quas earum similique sunt illum eveniet? At quibusdam
            eaque odit voluptate earum nihil, consequuntur quasi!
          </article>
          <div className="brains-container">
            <img
              src="../../../public/photos/brains.png"
              alt=""
              className="brains"
            />
          </div>
        </div>
      </section>

      <section>
        <h1>Projects</h1>
        <div>
          <img src="" alt="project Image" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            non, omnis repellat nesciunt illo minus quo cupiditate sapiente
            delectus fugiat!
          </p>
        </div>
      </section>

      <footer></footer>
    </>
  );
};

export default HomePage;
