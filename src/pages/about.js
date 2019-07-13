import React from "react";
import Layout from "../components/layout";



const handleClick = (e) => {
  e.target.classList.toggle("active");
  let panel = e.target.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}


export default () => (
  <Layout>
    <div className="w3-container w3-center w3-padding-16">
      <h5><span className="w3-tag w3-theme w3-wide w3-center">ABOUT ME</span></h5>
    </div>
    <div className="w3-content  w3-padding-18" style={{ maxWidth: "750px" }}>
      <button className="w3-btn w3-left-align w3-block w3-card-2 accordion active" onClick={handleClick}>Who am I?</button>
      <div id="bio" className="w3-container  w3-border panel" style={{maxHeight: "500px"}}>
        <p>Hello, my name's Antony Ndungu. A software developer with over two years experience working with and building Web Services, Financial Systems and Telecommunication Solutions.
          I currently work as a Software Developer at Safaricom PLC. I am skilled in Linux, Front End Software Development, Back End Software Development and Application Database Design.
        </p>
      </div>
      <button className="w3-btn w3-left-align w3-block w3-card-2 accordion" onClick={handleClick}>Favourite programming languages</button>
      <div className="w3-container w3-border panel" >
        <p> I like Javascript, Golang and The C programming language.
        </p>
      </div>
      <button className="w3-btn w3-left-align w3-block w3-card-2 accordion" onClick={handleClick}>Favourite programming tools</button>
      <div className="w3-container w3-border  panel" >
        <p> I use <a href="https://git-scm.com/" target="blank">GIT</a> for source code version control. My favourite code editor is <a href="https://code.visualstudio.com/" target="blank">Visual Studio Code</a>.
        </p>
      </div>
      <button className="w3-btn w3-left-align w3-block w3-card-2 accordion" onClick={handleClick}>Interests</button>
      <div className="w3-container w3-border panel">
        <ul className="w3-ul">
          <li>Microservice Architecture</li>
          <li>Docker</li>
          <li>Kubernetes</li>
          <li>Embedded Systems</li>
          <li>Progressive Web Apps</li>
        </ul>
      </div>
      <button className="w3-btn w3-left-align w3-block w3-card-2 accordion" onClick={handleClick}>Hobbies</button>
      <div className="w3-container w3-border panel">
        <ul className="w3-ul">
          <li>Swimming</li>
          <li>Watching football</li>
          <li>Watching movies</li>
          <li>Coding</li>
          <li>Playing video games</li>
        </ul>
      </div>
    </div>
  </Layout>
);