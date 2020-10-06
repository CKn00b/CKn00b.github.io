import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* This is the navbar */}
      <nav id="navbar" class="nav">
        <div class="nav-list">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      {/* This is the about section */}
      <section id="about" class="about">
        <h1 id="hello">Hello, world! I'm CK New.</h1>
        <p>
          I'm a software developer based in Fayetteville, NC. I love building
          things, tinkering with technology, and solving problems with creative
          thinking. I'm currently looking for work, either near my neck of the
          woods or remote, and you can contact me via the links at the bottom of
          this page.
        </p>
        <div id="interests">
          Besides software, my other interests include:
          <ul>
            <li>
              <strong>Music</strong> is one my greatest passions. I have very
              eclectic taste and enjoy listening to and talking about all sorts
              of music. You can be sure to see me setting the mood with my
              favorite jams, whether I'm working behind a keyboard or cooking up
              my favorite meals.
            </li>
            <li>
              <strong>Food</strong> makes me happy! Next to nothing puts a
              bigger smile on my face than sitting down (or standing next to a
              food truck) and enjoying something I've had 1000 times or never
              before.
            </li>
            <li>
              <strong>Travel</strong> is something we should all experience. I
              grew up in a small town and joined the military right out of high
              school, and the journey I've made to get here now has taught me so
              much I would've never known. I've travelled numerous states and a
              few countries so far, and I plan on travelling to many more!
            </li>
            <li>
              <strong>Games!</strong> Card games, board games, and video games
              are a favorite pastime of mine. Kicking back and exploring a new
              world in my space ship or playing a few hands of poker has a way
              of reenergizing and refueling me for my next coding session!
            </li>
          </ul>
        </div>
      </section>
      {/* This is the projects section */}
      <section id="projects">
        <h2>These are some of my projects. ⬇</h2>
        <div class="grid">
          <p>
            <a
              href="https://github.com/ckn00b/myLearning"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Learning
            </a>
            <br></br>This is where I keep my day-to-day learning materials and
            projects. I practice coding and building things and keep them here!
          </p>
          <p>
            <a
              href="https://github.com/ckn00b/Dataman"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dataman
            </a>
            <br></br>Dataman was a project I completed using python to replicate
            a fun little calculator (toy?) that makes mathematics fun for
            (hopefully?) the child <em>and</em> parent!
          </p>
        </div>
      </section>
      {/* This is the contact section */}
      <section id="contact" class="contact-section">
        <div class="contact-section-header">
          <h2>Need a developer?</h2>
          <p>Let's get a coffee! Or, feel free to contact me:</p>
        </div>
        <div class="contact-links">
          <a
            href="https://twitter.com/CKn00b"
            target="_blank"
            rel="noopener noreferrer"
            class="btn contact-details"
          >
            <i class="fab fa-twitter"></i>Twitter
          </a>
          <a
            href="https://linkedin.com/in/cknew"
            target="_blank"
            rel="noopener noreferrer"
            class="btn contact-details"
          >
            <i class="fab fa-linkedin"></i>LinkedIn
          </a>
          <a
            id="profile-link"
            href="https://github.com/ckn00b"
            target="_blank"
            rel="noopener noreferrer"
            class="btn contact-details"
          >
            <i class="fab fa-github"></i>GitHub
          </a>
          <a href="mailto:cknew.dev@gmail.com" class="btn contact-details">
            <i class="fas fa-at"></i>Email
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
